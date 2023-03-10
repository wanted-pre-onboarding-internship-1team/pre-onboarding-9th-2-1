import { useProductValueContext } from '../../contexts/ProductContext';
import AddedItem from './AddedItem';
import AddedItemToalAmount from './AddedItemToalAmount';
import { VStack } from '@chakra-ui/react';
import React from 'react';

export default function AddedList() {
  const addedList = useProductValueContext();
  return (
    <VStack mb='3'>
      {addedList &&
        addedList.map(product => <AddedItem key={product.idx} {...product} />)}
      <AddedItemToalAmount />
    </VStack>
  );
}
