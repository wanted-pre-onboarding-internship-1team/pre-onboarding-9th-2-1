import Filters from '../components/filter/Filters';
import { getLocalStorage } from '../util/getLocalStorage';
import ProductList from './../components/product/ProductList';
import { Container } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function MainPage() {
  const getFilter = getLocalStorage('productFilter', { check: [], range: [] });

  const [filter, setFilter] = useState(getFilter);

  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Filters filter={filter} setFilter={setFilter} />
      <ProductList filter={filter} setFilter={setFilter} />
    </Container>
  );
}
