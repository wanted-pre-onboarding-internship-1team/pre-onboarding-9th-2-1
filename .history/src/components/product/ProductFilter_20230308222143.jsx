import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
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
    <Box p={5}>
      <div>123</div>
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
    </Box>
  );
}
