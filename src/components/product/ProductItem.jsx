import useAddProduct from '../../hooks/useAddProduct';
import ProductName from '../common/ProductName';
import ProductNumber from '../common/ProductNumber';
import ProductPrice from '../common/ProductPrice';
import ThumbNailImage from '../common/ThumbNailImage';
import ProductDetail from './ProductDetail';
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  IconButton,
  Tag,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { RiShoppingBag2Fill } from 'react-icons/ri';

const ProductItem = ({ product }) => {
  const { idx, name, price, spaceCategory } = product;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClickHandler = useAddProduct(product);

  return (
    <>
      <Card
        onClick={onOpen}
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        cursor='pointer'>
        <ThumbNailImage product={product} />

        <Stack flex='1'>
          <CardBody position='relative'>
            <ProductNumber idx={idx} />
            <ProductName name={name} />
            <ProductPrice price={price} />
            <Tag>{spaceCategory}</Tag>
          </CardBody>

          <CardFooter justifyContent='flex-end'>
            <IconButton
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
