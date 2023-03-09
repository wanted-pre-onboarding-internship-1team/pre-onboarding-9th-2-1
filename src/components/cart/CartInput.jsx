import { useProductActionContext } from './../../contexts/ProductContext';
import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  useToast,
} from '@chakra-ui/react';
import React from 'react';

const CartInput = ({ product }) => {
  const { quantity, maximumPurchases } = product;

  const { setProduct } = useProductActionContext();

  const toast = useToast();

  const onChangeHandler = e => {
    if (maximumPurchases < e) {
      toast({
        title: `최대 예약 가능 수량은 ${maximumPurchases}개입니다.`,
        status: 'error',
        variant: 'subtle',
        isClosable: true,
      });

      setProduct(product, maximumPurchases);
      return;
    }

    if (1 > e) {
      toast({
        title: `1 개 이상의 상품을 선택해 주세요.`,
        status: 'error',
        variant: 'subtle',
        isClosable: true,
      });
    }

    setProduct(product, +e);
  };

  return (
    <NumberInput
      onChange={onChangeHandler}
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
