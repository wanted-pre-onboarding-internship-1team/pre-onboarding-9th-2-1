import AddedList from '../components/reservation/AddedList';
import { Container } from '@chakra-ui/react';
import React from 'react';

export default function ReservationPage() {
  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <AddedList />
    </Container>
  );
}
