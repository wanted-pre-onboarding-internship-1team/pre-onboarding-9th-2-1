import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Badge,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const ProductFilter = ({ isOpen, onClose, setCondition }) => {
  const [range, setRange] = useState({ min: 0, max: 50000 });
  const step = 500;

  const handleSubmit = e => {
    if (range.min > range.max) {
      alert('범위가 잘못되었습니다.');
      setRange({ min: 0, max: 50000 });
      return;
    }
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent overflow='hidden'>
        <ModalCloseButton
          backgroundColor='white'
          borderRadius='full'
          zIndex={10}
        />
        <ModalHeader>필터</ModalHeader>
        <ModalBody>
          <RangeSlider
            aria-label={['min', 'max']}
            value={[range.min / step, range.max / step]}
            onChange={value => {
              setRange({
                ...range,
                min: value[0] * step,
                max: value[1] * step,
              });
            }}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb
              backgroundColor='teal'
              boxSize={12}
              index={0}
              color='white'
              children={range.min}
            />
            <RangeSliderThumb
              backgroundColor='teal'
              boxSize={12}
              index={1}
              color='white'
              children={range.max}
            />
          </RangeSlider>

          <Box>
            <NumberInput
              width='40%'
              display='inline-block'
              size='lg'
              defaultValue={15}
              value={range.min}
              onChange={min => {
                setRange({ ...range, min: min });
              }}
              min={0}>
              <NumberInputField />
            </NumberInput>
            <Box width='15%' display='inline-block' textAlign='center'>
              ~
            </Box>
            <NumberInput
              width='40%'
              display='inline-block'
              size='lg'
              name='max'
              defaultValue={15}
              value={range.max}
              onChange={max => {
                setRange({ ...range, max: max });
              }}
              max={50000}>
              <NumberInputField />
            </NumberInput>
          </Box>
        </ModalBody>

        <ModalFooter justifyContent='right'>
          <Button
            color='white'
            backgroundColor='teal'
            fontSize='sm'
            onClick={handleSubmit}>
            완료
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProductFilter;
