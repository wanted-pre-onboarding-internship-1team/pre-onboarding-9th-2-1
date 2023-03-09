import { Button } from '@chakra-ui/button';
import { Flex, HStack, Text } from '@chakra-ui/layout';
import {
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
} from '@chakra-ui/react';

const RangeFilter = () => {
  const MIN_RANGE = 1000;
  const MAX_RANGE = 30000;
  const RANGE_STEP = 1000;
  return (
    <>
      <Flex justifyContent='space-between' mb='2'>
        <FormLabel htmlFor='range1' fontSize='md' fontWeight='bold'>
          가격
        </FormLabel>

        <Button size='xs'>필터 적용 해제</Button>
      </Flex>

      <HStack>
        <NumberInput
          id='range1'
          value={MIN_RANGE.toLocaleString()}
          min={MIN_RANGE}
          max={MAX_RANGE}
          step={RANGE_STEP}
          title='가격 범위 최솟값'>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Text>-</Text>

        <NumberInput
          id='range2'
          value={MAX_RANGE.toLocaleString()}
          min={MIN_RANGE}
          max={MAX_RANGE}
          step={RANGE_STEP}
          title='가격 범위 최댓값'>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </HStack>

      <RangeSlider
        min={MIN_RANGE}
        max={MAX_RANGE}
        step={RANGE_STEP}
        focusThumbOnChange={false}
        value={[MIN_RANGE, MAX_RANGE]}
        title='가격 범위'
        mt='3'
        colorScheme='linkedin'>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0} />
        <RangeSliderThumb boxSize={6} index={1} />
      </RangeSlider>
    </>
  );
};

export default RangeFilter;
