import TravelProductList from '../components/main/TravelProductList';
import { Container, Flex } from '@chakra-ui/react';
import React from 'react';

export default function Mainpage() {
  return (
    <Container width='100vw' height='100vh'>
      <Flex justify='center'>
        <TravelProductList />
      </Flex>
    </Container>
  );
}
