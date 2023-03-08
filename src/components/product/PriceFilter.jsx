import {
  Stack,
  Text,
  Spacer,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSlider,
  RangeSliderTrack,
  Tooltip,
} from '@chakra-ui/react';

export const PriceFilter = ({ handlePriceChange, selectPrice }) => {
  return (
    <Stack direction='row' spacing='6'>
      <Text fontSize='lg' fontWeight='bold'>
        가격
      </Text>
      <Spacer />
      <RangeSlider
        colorScheme='gray'
        min={0}
        max={30000}
        step={5000}
        defaultValue={[0, 30000]}
        onChange={handlePriceChange}
        w='70%'>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <Tooltip
          hasArrow
          bg='gray.700'
          color='white'
          placement='top'
          label={`${selectPrice[0].toLocaleString('ko-KR')}원`}>
          <RangeSliderThumb index={0} boxSize={5} />
        </Tooltip>
        <Tooltip
          hasArrow
          bg='gray.700'
          color='white'
          placement='top'
          label={`${selectPrice[1].toLocaleString('ko-KR')}원`}>
          <RangeSliderThumb index={1} boxSize={5} />
        </Tooltip>
      </RangeSlider>
    </Stack>
  );
};
