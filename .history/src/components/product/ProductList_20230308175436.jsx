import { getProduct } from './../../apis/api';
import ProductItem from './ProductItem';
import { Divider, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const ProductList = ({ productList }) => {
  return (
    <VStack
      divider={<Divider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
      p={5}>
      {productList &&
        productList.map(product => (
          <ProductItem key={product.idx} product={product} />
        ))}
    </VStack>
  );
};

export default ProductList;
