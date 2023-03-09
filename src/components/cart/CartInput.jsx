import { useProductActionContext } from './../../contexts/ProductContext';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import React from 'react';

const CartInput = ({ product }) => {
  const { quantity, maximumPurchases } = product;

  const { setProduct } = useProductActionContext();

  const onClickHandler = e => {
    setProduct(product, +e);
  };

  return (
    <NumberInput
      onChange={onClickHandler}
      value={quantity}
      max={maximumPurchases}
      min={1}
      clampValueOnBlur={false}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default CartInput;
