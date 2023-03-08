import Filter from '../filter/Filter';
import { getProduct } from './../../apis/api';
import ProductItem from './ProductItem';
import { Divider, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProduct().then(({ data }) => setProductList(data));
  }, []);

  return (
    <>
      <Filter />
      <VStack
        divider={<Divider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        pb={5}
        pl={5}
        pr={5}
        pt={2}>
        {productList &&
          productList.map(product => (
            <ProductItem key={product.idx} product={product} />
          ))}
      </VStack>
    </>
  );
};

export default ProductList;
