import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderMark,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

export default function Price({ setPriceRange }) {
  const [sliderValue, setSliderValue] = useState([10000, 30000]);

  const handleValue = val => {
    setSliderValue(val);
    setPriceRange(val);
  };

  return (
    <RangeSlider
      m='30px'
      w='550px'
      defaultValue={[10000, 30000]}
      min={0}
      max={40000}
      step={1000}
      onChange={val => handleValue(val)}>
      <RangeSliderMark
        value={sliderValue[0]}
        textAlign='center'
        bg='transparent'
        color='black'
        mt='-10'
        ml='-10'
        w='20'>
        {sliderValue[0]}원
      </RangeSliderMark>
      <RangeSliderMark
        value={sliderValue[1]}
        textAlign='center'
        bg='transparent'
        color='black'
        mt='-10'
        ml='-10'
        w='20'>
        {sliderValue[1]}원
      </RangeSliderMark>
      <RangeSliderTrack bg='lightgrey'>
        <RangeSliderFilledTrack bg='darkgrey' />
      </RangeSliderTrack>
      <RangeSliderThumb boxSize={6} index={0} />
      <RangeSliderThumb boxSize={6} index={1} />
    </RangeSlider>
  );
}
