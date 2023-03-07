import TravelProductList from '../components/main/TravelProductList';
import { Container, Flex } from '@chakra-ui/react';
import React, { Suspense } from 'react';

export default function Mainpage() {
  return (
    <Container
      width='100vw'
      height='100vh'
      mx='0'
      px='0'
      position='relative'
      maxWidth='100vw'>
      <Flex justify='center' width='100%' height='100%'>
        <Suspense fallback={<div>로딩중</div>}>
          <TravelProductList />
        </Suspense>
      </Flex>
    </Container>
  );
}
