import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';
import { useState } from 'react';

const InitializeMin = 0;
const InitializeMax = 20000;

export default function ProductFilter() {
  const [slideValue, setSlideValue] = useState([InitializeMin, InitializeMax]);
  const onChange = val => {
    setSlideValue(val);
  };

  return (
    <Box p={5}>
      <RangeSlider
        aria-label='min max'
        defaultValue={[0, 200000]}
        onChange={onChange}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0}>
          <Box top='100%' position='absolute'>
            {slideValue[0]}
          </Box>
        </RangeSliderThumb>
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </Box>
  );
}
