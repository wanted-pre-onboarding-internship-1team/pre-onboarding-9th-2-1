import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const CartInput = () => {
  const [quantity, setQuantity] = useState(1);

  const onClickHandler = e => {
    setQuantity(e);
  };

  return (
    <NumberInput
      onChange={onClickHandler}
      value={quantity}
      max={30}
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
