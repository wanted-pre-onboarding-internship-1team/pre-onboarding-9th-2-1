import BasketList from '../../components/basket/BasketList';
import { Container, Text } from '@chakra-ui/react';
import React from 'react';

export default function Basket() {
  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Text textAlign='center' m='30px' fontSize='3xl'>
        장바구니
      </Text>
      <BasketList />
    </Container>
  );
}
