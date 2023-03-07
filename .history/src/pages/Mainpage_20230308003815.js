import TravelProductList from '../components/main/TravelProductList';
import { Container, Flex } from '@chakra-ui/react';
import React, { Suspense } from 'react';

export default function Mainpage() {
  return (
    <Container width='100vw' height='100vh'>
      <Flex justify='center'>
        <Suspense fallback={<div>로딩중</div>}>
          <TravelProductList />
        </Suspense>
      </Flex>
    </Container>
  );
}
