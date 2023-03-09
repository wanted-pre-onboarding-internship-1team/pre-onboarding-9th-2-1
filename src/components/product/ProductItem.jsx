import { useProductActionContext } from './../../contexts/ProductContext';
import LazyImage from './../common/LazyImage';
import ProductDetail from './ProductDetail';
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  IconButton,
  Tag,
  useDisclosure,
  AspectRatio,
  Button,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiShoppingBag2Fill } from 'react-icons/ri';

const ProductItem = ({ product }) => {
  const { idx, name, mainImage, price, spaceCategory, maximumPurchases } =
    product;

  const [quantity, setQuantity] = useState(1);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const { addProduct } = useProductActionContext();

  const onClickHandler = e => {
    e.stopPropagation();
    // const storageList = JSON.parse(localStorage.getItem('products'));
    // if (storageList && storageList.find(product => product.idx === idx)) {
    //   storageList.find(product => product.idx === idx).quantity = quantityNum;
    //   localStorage.setItem('products', JSON.stringify(storageList));
    // } else {
    //   product.quantity = quantityNum;
    // }
    addProduct(product, quantity);
  };

  const quantityMinus = e => {
    e.stopPropagation();
    if (quantity === 1) return;
    setQuantity(prev => prev - 1);
  };

  const quantityPlus = e => {
    e.stopPropagation();
    if (quantity === maximumPurchases) {
      toast({
        title: '최대 구매 가능한 수량입니다',
        status: 'error',
        isClosable: true,
      });
      return;
    }
    setQuantity(prev => prev + 1);
  };

  return (
    <>
      <Card
        onClick={onOpen}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        cursor='pointer'>
        <AspectRatio width={{ base: '100%', sm: '200px' }} ratio={1}>
          <LazyImage src={mainImage} alt={name} width='100%' />
        </AspectRatio>

        <Stack flex='1'>
          <CardBody position='relative'>
            <Text
              decoration='underline'
              position='absolute'
              top={5}
              right={6}
              minW={10}
              textAlign='center'>
              {idx}
            </Text>
            <Text fontSize='md' noOfLines={1} pr={10}>
              {name}
            </Text>
            <Text fontWeight='bold' fontSize='md' py='2'>
              {price.toLocaleString()}원
            </Text>
            <Tag>{spaceCategory}</Tag>
          </CardBody>

          <CardFooter alignItems='center' justifyContent='flex-end'>
            <Stack direction='row' spacing={2} align='center'>
              <Button
                backgroundColor='transparent'
                border='1px'
                size='xs'
                ml={1}
                fontSize='md'
                onClick={quantityMinus}>
                -
              </Button>
              <Text fontSize='md' display='inline-block'>
                {quantity}
              </Text>
              <Button
                backgroundColor='transparent'
                border='1px'
                size='xs'
                fontSize='md'
                onClick={quantityPlus}>
                +
              </Button>
            </Stack>
            <IconButton
              ml='30px'
              onClick={onClickHandler}
              aria-label='예약하기'
              icon={<RiShoppingBag2Fill />}
            />
          </CardFooter>
        </Stack>
      </Card>
      <ProductDetail isOpen={isOpen} onClose={onClose} product={product} />
    </>
  );
};

export default ProductItem;
