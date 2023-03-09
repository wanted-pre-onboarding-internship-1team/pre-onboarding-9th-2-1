import useOriginProduct from '../../../hooks/useOriginProduct';
import {
  HStack,
  NumberInput,
  NumberInputField,
  Text,
  Button,
} from '@chakra-ui/react';
import React, { useState, useCallback, useEffect } from 'react';
import { IoAddOutline } from 'react-icons/io5';

function PriceRangeInput({ onAdd }) {
  const originProductList = useOriginProduct();
  const MAX =
    originProductList.length !== 0
      ? Math.max(...originProductList.map(product => product.price))
      : 0;
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

  const onClickHandler = useCallback(() => {
    if (minPrice === 0 && maxPrice === 0) return;
    if (parseInt(minPrice) > parseInt(maxPrice)) {
      onAdd({
        min: parseInt(maxPrice),
        max: parseInt(minPrice),
      });
    } else {
      onAdd({
        min: parseInt(minPrice),
        max: parseInt(maxPrice),
      });
    }

    setMinPrice(0);
    setMaxPrice(0);
  }, [maxPrice, minPrice, onAdd]);

  useEffect(() => {
    const event = e => {
      if (e.keyCode === 13) {
        onClickHandler();
      }
    };
    document.addEventListener('keyup', event);
    return () => {
      document.removeEventListener('keyup', event);
    };
  }, [onClickHandler]);

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
        onClick={onClickHandler}>
        <IoAddOutline />
      </Button>
    </HStack>
  );
}

export default PriceRangeInput;
