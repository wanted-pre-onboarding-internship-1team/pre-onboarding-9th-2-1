import LazyImage from './../common/LazyImage';
import ProductBtn from './ProductBtn';
import ProductDetail from './ProductDetail';
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Tag,
  useDisclosure,
  AspectRatio,
} from '@chakra-ui/react';
import React from 'react';

const ProductItem = ({ product }) => {
  const { idx, name, mainImage, price, spaceCategory } = product;

  const { isOpen, onOpen, onClose } = useDisclosure();

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

          <CardFooter justifyContent='flex-end'>
            <ProductBtn product={product} />
          </CardFooter>
        </Stack>
      </Card>

      <ProductDetail isOpen={isOpen} onClose={onClose} product={product} />
    </>
  );
};

export default ProductItem;
