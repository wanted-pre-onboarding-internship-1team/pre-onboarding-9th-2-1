import {
  useProductActionContext,
  useProductValueContext,
} from '../../contexts/ProductContext';
import { IconButton, useToast } from '@chakra-ui/react';
import React from 'react';
import { RiShoppingBag2Fill } from 'react-icons/ri';

const ProductBtn = ({ product }) => {
  const { idx, maximumPurchases } = product;

  const { addProduct } = useProductActionContext();
  const addedList = useProductValueContext();

  const toast = useToast();

  const onClickHandler = e => {
    e.stopPropagation();

    const ADD_NUM = 1;
    const quantity = addedList?.find(item => item.idx === idx)?.quantity ?? 0;

    if (maximumPurchases <= quantity) {
      toast({
        title: `최대 예약 가능 수량은 ${maximumPurchases}개입니다.`,
        status: 'error',
        variant: 'subtle',
        isClosable: true,
      });
      return;
    }

    addProduct(product, ADD_NUM);
    toast({
      title: `장바구니에 ${quantity + ADD_NUM}개 담겼습니다.`,
      status: 'success',
      variant: 'subtle',
      isClosable: true,
    });
    return;
  };

  return (
    <IconButton
      onClick={onClickHandler}
      aria-label='예약하기'
      icon={<RiShoppingBag2Fill />}
    />
  );
};

export default ProductBtn;
