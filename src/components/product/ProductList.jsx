import { getProduct } from './../../apis/api';
import { PriceFilter } from './PriceFilter';
import ProductItem from './ProductItem';
import SpeaceFilter from './SpaceFilter';
import { Divider, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [selectSpace, setSelectSpace] = useState([]);
  const [selectPrice, setSelectPrice] = useState([0, 30000]);

  const filterProductList = productList.filter(product => {
    const SelectedSpace =
      selectSpace.length === 0 || selectSpace.includes(product.spaceCategory);
    const SelectedPrice =
      product.price >= selectPrice[0] && product.price <= selectPrice[1];
    return SelectedSpace && SelectedPrice;
  });

  const handleSelectSpace = event => {
    const space = event.target.value;
    if (selectSpace.includes(space)) {
      setSelectSpace(selectSpace.filter(s => s !== space));
    } else {
      setSelectSpace([...selectSpace, space]);
    }
  };
  const handlePriceChange = value => {
    setSelectPrice(value);
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
      <SpeaceFilter handleSelectSpace={handleSelectSpace} />
      <PriceFilter
        handlePriceChange={handlePriceChange}
        selectPrice={selectPrice}
      />
      {filterProductList &&
        filterProductList.map(product => (
          <ProductItem key={product.idx} product={product} />
        ))}
    </VStack>
  );
};

export default ProductList;
