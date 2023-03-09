import { getProduct } from './../../apis/api';
import ProductItem from './ProductItem';
import { Divider, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProduct().then(({ data }) => setProductList(data));
  }, []);

  const price = useSelector(state => {
    return state.filterPrice;
  });
  const contry = useSelector(state => {
    return state.filterContry;
  });

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
