import { getProduct } from '../apis/api';
import Header from '../components/common/Header';
import ProductFilter from '../components/product/ProductFilter';
import useFilterProduct from '../hooks/useFilterProduct';
import useProductList from '../hooks/useProductList';
import ProductList from './../components/product/ProductList';
import { Container, Icon } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function MainPage() {
  const rightComp = () => (
    <Link to='/reservations'>
      <Icon as={BsCart2} boxSize='6' />
    </Link>
  );

  const productList = useProductList();
  const {
    filteredList,
    slideValue,
    area,
    onSlideChange,
    onInputChange,
    onSubmit,
  } = useFilterProduct();
  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header rightComp={rightComp()} />
      <ProductFilter />
      <ProductList productList={productList} />
    </Container>
  );
}
