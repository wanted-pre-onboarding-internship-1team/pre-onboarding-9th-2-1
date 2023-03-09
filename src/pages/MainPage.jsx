import Header from '../components/common/Header';
import Filter from '../components/filter/Filter';
import { FilterProvider } from '../contexts/FilterContext';
import { ProductProvider } from '../contexts/ProductContext';
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
    <ProductProvider>
      <FilterProvider>
        <Container maxW='container.sm' backgroundColor='white'>
          <Header rightComp={rightComp()} />
          <Filter />
          <ProductList />
        </Container>
      </FilterProvider>
    </ProductProvider>
  );
}
