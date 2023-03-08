import { getProduct } from '../apis/api';
import Header from '../components/common/Header';
import ProductList from './../components/product/ProductList';
import { Container, Icon } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import useProductList from '../hooks/useProductList';

export default function MainPage() {
  const rightComp = () => (
    <Link to='/reservations'>
      <Icon as={BsCart2} boxSize='6' />
    </Link>
  );

  const { productList } = useProductList();

 \
  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header rightComp={rightComp()} />
      <div>123</div>
      <ProductList productList={productList} />
    </Container>
  );
}
