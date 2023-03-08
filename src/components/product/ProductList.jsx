import {
  useFilterValueContext,
  useFilterActionContext,
} from '../../contexts/FilterProductContext';
import Filter from '../filter/Filter';
import { getProduct } from './../../apis/api';
import ProductItem from './ProductItem';
import { Divider, VStack } from '@chakra-ui/react';
import React, { useEffect } from 'react';

const ProductList = () => {
  const filterProduct = useFilterValueContext();
  const { setFilterProduct } = useFilterActionContext();
  useEffect(() => {
    getProduct().then(({ data }) => {
      localStorage.setItem('originProductList', JSON.stringify(data));
      setFilterProduct(data);
    });
  }, [setFilterProduct]);

  return (
    <VStack
      divider={<Divider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
      p={5}>
      <Filter />
      {filterProduct &&
        filterProduct.map(product => (
          <ProductItem key={product.idx} product={product} />
        ))}
    </VStack>
  );
};

export default ProductList;
