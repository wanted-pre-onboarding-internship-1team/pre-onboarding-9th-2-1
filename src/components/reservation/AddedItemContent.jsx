import AddedItemDeleteIcon from './AddedItemDeleteIcon';
import { VStack, Text } from '@chakra-ui/react';
import React from 'react';

export default function AddedItemContent({
  idx,
  name,
  count,
  price,
  maximumPurchases,
}) {
  return (
    <VStack w='100%'>
      <AddedItemDeleteIcon idx={idx} />
      <Text>{idx}</Text>
      {name}
    </VStack>
  );
}
