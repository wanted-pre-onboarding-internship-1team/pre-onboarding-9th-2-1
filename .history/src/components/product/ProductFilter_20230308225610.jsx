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

export default function ProductFilter(props) {
  const { slideValue, area, onSlideChange, onInputChange, onSubmit } = props;

  return (
    <FormControl p={5} boxShadow='lg' borderRadius='10' onSubmit={onSubmit}>
      <FormLabel>가격</FormLabel>
      <Flex
        alignItems='center'
        gap={{ base: 'none', md: '10' }}
        justifyContent={{ base: 'none', md: 'space-around' }}
        direction={{ base: 'column', md: 'row' }}>
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
        onChange={onSlideChange}>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0}>
          <Box top='100%' position='absolute' wordBreak='keep-all'>
            {slideValue[0]}원
          </Box>
        </RangeSliderThumb>
        <RangeSliderThumb index={1}>
          <Box top='100%' position='absolute' wordBreak='keep-all'>
            {slideValue[1]}원
          </Box>
        </RangeSliderThumb>
      </RangeSlider>
      <FormLabel mt='4'>지역</FormLabel>
      <Input placeholder='First name' value={area} onChange={onInputChange} />
      <Button mt={4} colorScheme='teal' type='submit'>
        적용
      </Button>
    </FormControl>
  );
}
