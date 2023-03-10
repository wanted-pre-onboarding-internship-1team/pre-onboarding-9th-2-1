import Header from '../components/common/Header';
import Filters from '../components/filter/Filters';
import { getLocalStorage } from '../util/getLocalStorage';
import ProductList from './../components/product/ProductList';
import { Container, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function MainPage() {
  const getFilter = getLocalStorage('productFilter', { check: [], range: [] });

  const [filter, setFilter] = useState(getFilter);

  const rightComp = () => (
    <Link to='/reservations'>
      <Icon as={BsCart2} boxSize='6' />
    </Link>
  );

  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header rightComp={rightComp()} />
      <Filters filter={filter} setFilter={setFilter} />
      <ProductList filter={filter} setFilter={setFilter} />
    </Container>
  );
}
