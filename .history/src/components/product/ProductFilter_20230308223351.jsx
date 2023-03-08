import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Tag,
} from '@chakra-ui/react';
import { useState } from 'react';

const InitializeMin = 0;
const InitializeMax = 50000;

export default function ProductFilter() {
  const [slideValue, setSlideValue] = useState([InitializeMin, InitializeMax]);
  const onChange = val => {
    setSlideValue(val);
  };

  return (
    <FormControl p={5}>
      <FormLabel>가격</FormLabel>
      <Flex alignItems='center' gap='10' justifyContent='space-around'>
        <Input placeholder='First name' value={slideValue[0]} />
        ~
        <Input placeholder='First name' value={slideValue[1]} />
      </Flex>
      <RangeSlider
        aria-label='min max'
        value={[slideValue[0], slideValue[1]]}
        min={InitializeMin}
        max={InitializeMax}
        step='500'
        onChange={onChange}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0}>
          <Box top='100%' position='absolute'>
            {slideValue[0]}
          </Box>
        </RangeSliderThumb>
        <RangeSliderThumb index={1}>
          <Box top='100%' position='absolute'>
            {slideValue[1]}
          </Box>
        </RangeSliderThumb>
      </RangeSlider>
      <FormLabel>지역</FormLabel>
      <Input placeholder='First name' value={'123'} />
      <Button mt={4} colorScheme='teal' type='submit'>
        Submit
      </Button>
    </FormControl>
  );
}
