import AddedItemCount from './AddedItemCount';
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
    <VStack w='100%' align='left'>
      <AddedItemDeleteIcon idx={idx} />
      <Text fontSize='lg' as='b' noOfLines={1} pr={10}>
        {name}
      </Text>
      <AddedItemCount
        idx={idx}
        count={count}
        maximumPurchases={maximumPurchases}
      />
      <Text>{`총 금액 : ${(price * count).toLocaleString()} 원`}</Text>
    </VStack>
  );
}
