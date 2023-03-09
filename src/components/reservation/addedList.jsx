import { useProductValueContext } from '../../contexts/ProductContext';
import AddedItem from './AddedItem';
import { VStack } from '@chakra-ui/react';
import React from 'react';

export default function AddedList() {
  const addedList = useProductValueContext();
  return (
    <VStack>
      {addedList &&
        addedList.map(product => <AddedItem key={product.idx} {...product} />)}
    </VStack>
  );
}
