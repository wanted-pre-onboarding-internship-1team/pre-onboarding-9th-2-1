import { useProductValueContext } from '../../contexts/ProductContext';
import { Button } from '@chakra-ui/button';
import { Box, Text } from '@chakra-ui/layout';
import { Flex } from '@chakra-ui/react';
import React from 'react';

const CartCounter = () => {
  const addedList = useProductValueContext();

  const totalPrice = () => {
    const total = addedList?.reduce((ac, cr) => ac + cr.price * cr.quantity, 0);
    return total ? total.toLocaleString() : 0;
  };

  return (
    <Box p={5}>
      <Flex justifyContent='space-between' p='2'>
        <Text>결제 금액</Text>
        <Text fontSize='lg' fontWeight='bold'>
          {totalPrice()}원
        </Text>
      </Flex>
      <Button colorScheme='linkedin' mt={4} w='100%' isDisabled={true}>
        결제하기
      </Button>
    </Box>
  );
};

export default CartCounter;
