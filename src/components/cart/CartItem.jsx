import { useProductActionContext } from './../../contexts/ProductContext';
import LazyImage from './../common/LazyImage';
import CartInput from './CartInput';
import { Text } from '@chakra-ui/layout';
import {
  AspectRatio,
  Card,
  CardBody,
  CardFooter,
  IconButton,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { SlClose } from 'react-icons/sl';

const CartItem = ({ product }) => {
  const { idx, name, mainImage, price } = product;

  const { deleteProduct } = useProductActionContext();

  const onClickHandler = () => {
    deleteProduct(idx);
  };

  return (
    <Card direction='row' overflow='hidden' variant='unstyled'>
      <AspectRatio width='100px' ratio={1}>
        <LazyImage src={mainImage} alt={name} width='100%' />
      </AspectRatio>

      <Stack flex='1'>
        <CardBody position='relative' py='2' px='4'>
          <IconButton
            onClick={onClickHandler}
            decoration='underline'
            position='absolute'
            top={0}
            right={0}
            aria-label='카트에서 삭제하기'
            fontSize='2xl'
            icon={<SlClose />}
            variant='ghost'
          />

          <Text fontSize='md' noOfLines={1} pr={10}>
            {name}
          </Text>
          <Text fontWeight='bold' fontSize='md' py='1'>
            {price.toLocaleString()}원
          </Text>

          <CardFooter>
            <CartInput product={product} />
          </CardFooter>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CartItem;
