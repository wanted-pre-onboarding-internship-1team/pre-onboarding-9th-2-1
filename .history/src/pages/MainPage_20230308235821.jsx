
import Header from '../components/common/Header';
import ProductFilter from '../components/product/ProductFilter';
import useFilterProduct from '../hooks/useFilterProduct';

import ProductList from './../components/product/ProductList';
import { Container,  Icon } from '@chakra-ui/react';
import Reactfrom 'react';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function MainPage() {
  const rightComp = () => (
    <Link to='/reservations'>
      <Icon as={BsCart2} boxSize='6' />
    </Link>
  );

  const { filteredList, ...rest } = useFilterProduct();

  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header rightComp={rightComp()} />
      <ProductFilter {...rest} />
      <ProductList productList={filteredList} />
    </Container>
  );
}
