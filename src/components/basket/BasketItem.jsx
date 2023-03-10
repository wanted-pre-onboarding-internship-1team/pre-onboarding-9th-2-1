import { useProductActionContext } from '../../contexts/ProductContext';
import LazyImage from './../common/LazyImage';
import { Checkbox, CloseButton } from '@chakra-ui/react';
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Tag,
  AspectRatio,
  Button,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function BasketItem({ product, checkedItem, setCheckedItem }) {
  const { idx, name, mainImage, price, spaceCategory, maximumPurchases } =
    product;
  const [quantity, setQuantity] = useState(product.quantity);

  const { addProduct } = useProductActionContext();
  const { deleteProduct } = useProductActionContext();

  const toast = useToast();

  const quantityMinus = e => {
    e.stopPropagation();
    if (quantity === 1) return;
    setQuantity(prev => prev - 1);
  };

  const quantityPlus = e => {
    e.stopPropagation();
    if (quantity === maximumPurchases) {
      toast({
        title: '최대 구매 가능한 수량입니다.',
        status: 'error',
        isClosable: true,
      });
      return;
    }
    setQuantity(prev => prev + 1);
  };

  const handleCheckbox = e => {
    const { checked, value } = e.target;
    if (checked) {
      setCheckedItem([...checkedItem, parseInt(value)]);
    } else {
      setCheckedItem(checkedItem.filter(item => item !== parseInt(value)));
    }
  };

  useEffect(() => {
    addProduct(product, quantity);
  }, [quantity]);

  return (
    <Card
      mb='20px'
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      cursor='pointer'>
      <Checkbox
        flexDir='column'
        m='20px'
        value={idx}
        isChecked={checkedItem.includes(idx)}
        onChange={handleCheckbox}
      />
      <AspectRatio
        width={{ base: '100%', sm: '130px' }}
        height={{ sm: '130px' }}
        ratio={4 / 3}
        mt='20px'>
        <LazyImage src={mainImage} alt={name} width='100%' />
      </AspectRatio>
      <Stack flex='1'>
        <CardBody position='relative'>
          <CloseButton
            position='absolute'
            top={5}
            right={6}
            minW={10}
            textAlign='center'
            onClick={() => deleteProduct(idx)}
          />
          <Text fontSize='md' noOfLines={1} pr={10}>
            {name}
          </Text>
          <Tag>{spaceCategory}</Tag>
        </CardBody>
        <CardFooter justifyContent='space-between' alignItems='center'>
          <Stack
            direction='row'
            backgroundColor={`var(--chakra-colors-gray-200)`}
            borderRadius='5px'
            p={1}
            spacing={2}
            align='center'>
            <Button
              backgroundColor='white'
              border='1px'
              size='xs'
              fontSize='md'
              isDisabled={checkedItem.includes(idx)}
              onClick={quantityMinus}>
              -
            </Button>
            <Text fontSize='md' display='inline-block'>
              {quantity}
            </Text>
            <Button
              backgroundColor='white'
              border='1px'
              size='xs'
              fontSize='md'
              isDisabled={checkedItem.includes(idx)}
              onClick={quantityPlus}>
              +
            </Button>
          </Stack>
          <Text display='block' fontWeight='bold' fontSize='md' py='2'>
            {(price * quantity).toLocaleString()}원
          </Text>
        </CardFooter>
      </Stack>
    </Card>
  );
}
