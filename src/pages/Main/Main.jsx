import Products from '../../components/product/Products';
import { Flex } from '@chakra-ui/react';
import React from 'react';

function Main() {
  return (
    <Flex direction='column'>
      <Products />
    </Flex>
  );
}

export default Main;
