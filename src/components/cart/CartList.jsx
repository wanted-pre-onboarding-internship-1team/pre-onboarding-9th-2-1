import CartItem from './CartItem';
import { VStack, Divider } from '@chakra-ui/layout';
import React from 'react';

const CartList = () => {
  const cartList = [
    {
      idx: 1,
      name: '가나다 목장 하루 이용권',
      mainImage: 'https://picsum.photos/id/17/300/300',
      description: '가나다 목장 하루 이용권에 대한 내용입니다.',
      spaceCategory: '강원',
      price: 30000,
      maximumPurchases: 5,
      registrationDate: '2023.01.01 15:07:00',
      quantity: 4,
    },
    {
      idx: 2,
      name: 'AA 아쿠아리움 상어 밥주기 이용권',
      mainImage: 'https://picsum.photos/id/18/300/300',
      description: 'AA 아쿠아리움 상어 밥주기에 대한 내용입니다.',
      spaceCategory: '서울',
      price: 10000,
      maximumPurchases: 2,
      registrationDate: '2023.01.02 11:07:00',
      quantity: 1,
    },
  ];

  return (
    <VStack
      divider={<Divider borderColor='gray.200' />}
      spacing={4}
      align='stretch'
      p={5}>
      {cartList &&
        cartList.map(product => (
          <CartItem key={product.idx} product={product} />
        ))}
    </VStack>
  );
};

export default CartList;
