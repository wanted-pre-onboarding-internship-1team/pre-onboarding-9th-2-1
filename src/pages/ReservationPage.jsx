import { useProductValueContext } from '../contexts/ProductContext';
import { Text } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/react';
import React from 'react';

export default function ReservationPage() {
  const addedList = useProductValueContext();
  console.log(addedList);
  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Text>ReservationPage</Text>
    </Container>
  );
}
