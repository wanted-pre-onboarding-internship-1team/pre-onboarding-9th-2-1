import { useFilterActionContext } from '../../contexts/FilterProductContext';
import { Flex, Button } from '@chakra-ui/react';
import React from 'react';

function FilterEventButton({ onClose, setFlag }) {
  const { resetFilterProduct } = useFilterActionContext();
  return (
    <Flex justifyContent='space-around'>
      <Button
        w='100%'
        colorScheme='green'
        onClick={() => {
          onClose();
          setFlag.on();
        }}>
        적용
      </Button>
      <Button
        w='100%'
        colorScheme='red'
        onClick={() => {
          resetFilterProduct();
          onClose();
          setFlag.off();
        }}>
        초기화
      </Button>
    </Flex>
  );
}

export default FilterEventButton;
