import Filter from '../filter/Filter';
import Place from '../filter/Place';
import Price from '../filter/Price';
import { getProduct } from './../../apis/api';
import ProductItem from './ProductItem';
import { Divider, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [currentTab, setCurrentTab] = useState('');
  const [priceRange, setPriceRange] = useState([]);

  const TABS = [
    {
      id: 1,
      title: '가격순',
      content: <Price setPriceRange={setPriceRange} />,
    },
    { id: 2, title: '공간순', content: <Place /> },
  ];

  // const handleButton = e => {
  //   const { value } = e.target;
  //   const findIndex = filters.findIndex(({ id }) => id === parseInt(value));
  //   const prevFilters = [...filters];
  //   prevFilters[findIndex].isSelected = !filters[findIndex].isSelected;
  //   setFilters(prevFilters);
  // };

  useEffect(() => {
    getProduct().then(({ data }) => setProductList(data));
  }, []);

  return (
    <>
      <Filter
        TABS={TABS}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
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
