import { useProductValueContext } from '../../contexts/ProductContext';
import { Text } from '@chakra-ui/layout';
import React from 'react';

export default function AddedItemToalAmount() {
  const addedList = useProductValueContext();
  const totalPrice = addedList.reduce(
    (acc, cur) => acc + cur.price * cur.count,
    0
  );
  return (
    <Text
      alignSelf='end'
      size='xl'
      as='b'>{`총 금액 : ${totalPrice.toLocaleString()} 원`}</Text>
  );
}
