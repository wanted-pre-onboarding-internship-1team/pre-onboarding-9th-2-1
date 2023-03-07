import TravelProductList from '../components/main/TravelProductList';
import { Container, Flex } from '@chakra-ui/react';
import React, { Suspense } from 'react';

export default function Mainpage() {
  return (
    <Container width='100vw' height='100vh' position='relative'>
      d
      <Flex justify='center' width='100%' height='100%'>
        <Suspense fallback={<div>로딩중</div>}>
          <TravelProductList />
        </Suspense>
      </Flex>
    </Container>
  );
}
