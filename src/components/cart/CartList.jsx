import { useProductValueContext } from '../../contexts/ProductContext';
import CartItem from './CartItem';
import { VStack, Divider } from '@chakra-ui/layout';
import React from 'react';

const CartList = () => {
  const addedList = useProductValueContext();

  return (
    <VStack
      divider={<Divider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
      p={5}>
      {addedList &&
        addedList.map(product => (
          <CartItem key={product.idx} product={product} />
        ))}
    </VStack>
  );
};

export default CartList;
