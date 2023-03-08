import {
  Box,
  FormControl,
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
      <Tag>123</Tag>
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
    </FormControl>
  );
}
