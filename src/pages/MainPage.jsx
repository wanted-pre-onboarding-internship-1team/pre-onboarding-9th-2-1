import Header from '../components/common/Header';
import ProductList from './../components/product/ProductList';
import { Container, Icon } from '@chakra-ui/react';
import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function MainPage() {
  const rightComp = () => (
    <Link to='/reservations'>
      <Icon as={BsCart2} boxSize='6' />
    </Link>
  );

  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header noBackBtn={true} rightComp={rightComp()} />
      <ProductList />
    </Container>
  );
}
