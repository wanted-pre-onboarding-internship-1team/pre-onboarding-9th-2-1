import { useProductActionContext } from '../../contexts/ProductContext';
import BasketItem from './BasketItem';
import { Button, Checkbox, Divider, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function BasketList() {
  const storageList = JSON.parse(localStorage.getItem('products'));
  const [checkedItem, setCheckedItem] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { deleteProduct } = useProductActionContext();

  const handleAllCheckbox = e => {
    const { checked } = e.target;
    if (checked) {
      const idxArr = [];
      storageList.forEach(el => idxArr.push(el.idx));
      setCheckedItem(idxArr);
    } else {
      setCheckedItem([]);
    }
  };

  const handleSelectedDelete = () => {
    deleteProduct(checkedItem);
  };

  useEffect(() => {
    let selectedBasketList = [];
    checkedItem.forEach(el => {
      selectedBasketList.push(storageList.find(item => item.idx === el));
    });
    setTotalPrice(
      selectedBasketList.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    );
  }, [checkedItem]);

  return (
    <>
      <Flex justifyContent='space-between'>
        <Checkbox
          isChecked={checkedItem.length === storageList.length}
          onChange={handleAllCheckbox}>
          전체 선택
        </Checkbox>
        <Button fontSize='md' onClick={handleSelectedDelete}>
          선택 삭제
        </Button>
      </Flex>
      <Divider mt='20px' mb='20px' />
      {storageList.map(product => {
        return (
          <BasketItem
            key={product.idx}
            product={product}
            checkedItem={checkedItem}
            setCheckedItem={setCheckedItem}
          />
        );
      })}
      <Divider mt='20px' mb='20px' />
      <Flex justifyContent='space-between' mt='20px' mb='200px'>
        <Text fontSize='2xl'>
          총 &nbsp;
          <Text
            display='inline'
            color={`var(--chakra-colors-blue-500)`}
            fontWeight='bold'>
            {storageList.length}
          </Text>
          개
        </Text>
        <Text fontSize='2xl'>
          <Text
            display='inline'
            color={`var(--chakra-colors-blue-500)`}
            fontWeight='bold'>
            {totalPrice.toLocaleString()}
          </Text>
          원
        </Text>
      </Flex>
    </>
  );
}
