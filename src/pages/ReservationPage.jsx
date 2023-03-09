import CartCounter from '../components/cart/CartCounter';
import CartList from '../components/cart/CartList';
import Header from '../components/common/Header';
import { Container, Divider } from '@chakra-ui/react';
import React from 'react';

const ReservationPage = () => {
  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header noBackBtn={true} />
      <CartList />
      <Divider />
      <CartCounter />
    </Container>
  );
};

export default ReservationPage;
