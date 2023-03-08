import {
  Box,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';

export default function ProductFilter() {
  const onChange = val => {
    console.log(val);
  };

  return (
    <Box p={5}>
      <RangeSlider
        aria-label='min max'
        defaultValue={[10, 30]}
        onChange={onChange}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0}>
          <Box top='100%'></Box>
        </RangeSliderThumb>
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </Box>
  );
}
