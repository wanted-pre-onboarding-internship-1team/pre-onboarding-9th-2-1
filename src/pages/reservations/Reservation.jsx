import ReservationList from '../../components/Reservation/ReservationList';
import Header from '../../components/common/Header';
import { Container, Icon } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Reservation() {
  const rightComp = () => (
    <Link to='/main'>
      <Icon as={AiOutlineHome} boxSize='6' />
    </Link>
  );

  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header rightComp={rightComp()} />
      <ReservationList />
    </Container>
  );
}
