import { getProduct } from './../../apis/api';
import ProductFilter from './ProductFilter';
import ProductItem from './ProductItem';
import { Divider, VStack, Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [condition, setCondition] = useState({
    min: 0,
    max: 100000,
    categories: [],
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const filterProducts = product => {
    const { price, spaceCategory } = product;
    const { min, max, categories } = condition;

    const meetsCategoryCondition =
      !categories.length || categories.includes(spaceCategory);
    const meetsPriceCondition = price >= min && price <= max;

    return meetsCategoryCondition && meetsPriceCondition;
  };

  useEffect(() => {
    getProduct().then(({ data }) => setProductList(data));
  }, []);

  return (
    <VStack
      divider={<Divider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
      p={5}>
      <Button
        onClick={onOpen}
        width='20%'
        colorScheme='teal'
        size='md'
        align='right'>
        검색 조건
      </Button>
      <ProductFilter
        isOpen={isOpen}
        onClose={onClose}
        setCondition={setCondition}
      />
      {productList &&
        productList
          .filter(filterProducts)
          .map(product => <ProductItem key={product.idx} product={product} />)}
    </VStack>
  );
};

export default ProductList;
