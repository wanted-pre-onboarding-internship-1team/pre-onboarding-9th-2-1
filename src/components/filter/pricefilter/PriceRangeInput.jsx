import {
  HStack,
  NumberInput,
  NumberInputField,
  Text,
  Button,
} from '@chakra-ui/react';
import React, { useState, useCallback } from 'react';
import { IoAddOutline } from 'react-icons/io5';

function PriceRangeInput({ onAdd }) {
  const originProductList = JSON.parse(
    localStorage.getItem('originProductList')
  );
  const MAX = Math.max(...originProductList.map(product => product.price));
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  // 금액에서 0보다 작거나 MAX보다 큰 값이 들어오면 0 또는 MAX로 설정
  const onChangePrice = useCallback(
    (value, onChange) => {
      if (value < 0) return onChange(0);
      else if (value > MAX) return onChange(MAX);
      else return onChange(value);
    },
    [MAX]
  );

  const onClickHandler = () => {
    if (minPrice === 0 && maxPrice === 0) return;
    if (minPrice > maxPrice) return;
    onAdd({
      min: parseInt(minPrice),
      max: parseInt(maxPrice),
    });
    setMinPrice(0);
    setMaxPrice(0);
  };
  return (
    <HStack>
      <NumberInput
        w={20}
        size='xs'
        step={1}
        min={0}
        max={MAX}
        value={minPrice}
        onChange={e => onChangePrice(e, setMinPrice)}>
        <NumberInputField />
      </NumberInput>
      <Text>~</Text>
      <NumberInput
        w={20}
        size='xs'
        step={1}
        min={0}
        max={MAX}
        value={maxPrice}
        onChange={e => onChangePrice(e, setMaxPrice)}>
        <NumberInputField />
      </NumberInput>
      <Button
        size='xs'
        colorScheme='yellow'
        cursor='pointer'
        as={IoAddOutline}
        onClick={onClickHandler}
      />
    </HStack>
  );
}

export default PriceRangeInput;
