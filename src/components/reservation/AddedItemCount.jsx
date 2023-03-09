import { useProductActionContext } from '../../contexts/ProductContext';
import { Flex } from '@chakra-ui/layout';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
} from '@chakra-ui/react';
import React from 'react';

export default function AddedItemCount({ idx, count, maximumPurchases }) {
  const { editProductCount } = useProductActionContext();
  const onChange = e => {
    if (e > maximumPurchases) {
      editProductCount({
        targetProductIdx: idx,
        newCount: maximumPurchases,
      });
      return;
    }
    editProductCount({
      targetProductIdx: idx,
      newCount: e,
    });
  };
  return (
    <Flex direction='row' alignItems='center'>
      <NumberInput
        onChange={onChange}
        value={count}
        min={1}
        max={maximumPurchases}>
        <NumberInputField w='5rem' />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text ml='1'>{`/ ${maximumPurchases} 개`}</Text>
    </Flex>
  );
}
