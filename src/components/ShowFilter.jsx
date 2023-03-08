import { filterProductList } from '../store/productSlice';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  Box,
  Checkbox,
  Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const ShowFilter = props => {
  const dispatch = useDispatch();
  const { isOpen, onClose } = props;
  const spaceList = ['서울', '부산', '대구', '강원', '제주'];

  const defaultSlideValue = {
    min: 0,
    max: 30000,
  };
  const [slideValue, setSlideValue] = useState(defaultSlideValue);
  const [checkboxValue, setcheckboxValue] = useState([]);

  const onSlideChange = value => {
    setSlideValue({
      min: value[0],
      max: value[1],
    });
  };

  const setChecked = target => {
    if (target.checked == true) {
      setcheckboxValue(() => {
        return [...checkboxValue, target.value];
      });
    } else {
      setcheckboxValue(
        checkboxValue.filter(item => {
          return item !== target.value;
        })
      );
    }
  };

  const onFilter = () => {
    const payload = {
      slideValue: slideValue,
      checkboxValue: checkboxValue,
    };
    dispatch(filterProductList(payload));
    setSlideValue(defaultSlideValue);
    setcheckboxValue([]);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Text fontSize='2xl'>Filter</Text>
        </ModalHeader>
        <ModalBody>
          <Box margin='20px auto'>
            가격
            <RangeSlider
              aria-label={['min', 'max']}
              defaultValue={[slideValue['min'], slideValue['max']]}
              min={0}
              max={30000}
              step={1000}
              onChange={onSlideChange}>
              <RangeSliderTrack>
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0}>
                <Box color='black' top='100%' position='absolute'>
                  {slideValue['min']}
                </Box>
              </RangeSliderThumb>
              <RangeSliderThumb boxSize={6} index={1}>
                <Box color='black' top='100%' position='absolute'>
                  {slideValue['max']}
                </Box>
              </RangeSliderThumb>
            </RangeSlider>
          </Box>
          <Box margin='50px auto'>
            공간
            <Stack spacing={5} direction='row'>
              {spaceList.map((item, index) => {
                return (
                  <Checkbox
                    value={item}
                    onChange={e => setChecked(e.target)}
                    key={index}>
                    {item}
                  </Checkbox>
                );
              })}
            </Stack>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onFilter}>
            적용
          </Button>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            닫기
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ShowFilter;
