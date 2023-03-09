import Header from '../components/common/Header';
import { Container, Icon } from '@chakra-ui/react';
import React from 'react';
import { BsReverseListColumnsReverse } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function ReservationPage() {
  const rightComp = () => (
    <Link to='/main'>
      <Icon as={BsReverseListColumnsReverse} boxSize='6' />
    </Link>
  );

  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header noBackBtn={true} rightComp={rightComp()} />
    </Container>
  );
}
