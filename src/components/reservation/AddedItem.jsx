import LazyImage from '../common/LazyImage';
import AddedItemContent from './AddedItemContent';
import { HStack } from '@chakra-ui/layout';
import { Card } from '@chakra-ui/react';
import React from 'react';

export default function AddedItemDetail({
  idx,
  name,
  mainImage,
  count,
  price,
  maximumPurchases,
}) {
  return (
    <Card w='100%'>
      <HStack spacing={8} align='stretch'>
        <LazyImage src={mainImage} alt={name} />
        <AddedItemContent
          idx={idx}
          name={name}
          count={count}
          price={price}
          maximumPurchases={maximumPurchases}
        />
      </HStack>
    </Card>
  );
}
