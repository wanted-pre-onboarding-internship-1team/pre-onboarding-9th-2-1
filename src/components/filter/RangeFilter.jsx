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

const RangeFilter = ({ rangeValue, setRangeValue }) => {
  const MIN_RANGE = 1000;
  const MAX_RANGE = 30000;
  const RANGE_STEP = 1000;

  const onChangeHandler = (e, idx) => {
    if (typeof e === 'object') {
      const [min, max] = e;
      setRangeValue([min, max]);
    } else {
      const rangeArr = [rangeValue[0] ?? MIN_RANGE, rangeValue[1] ?? MAX_RANGE];
      rangeArr[idx] = parseInt(e);
      setRangeValue(rangeArr);
    }
  };

  const onClickHandler = () => {
    setRangeValue([]);
  };

  return (
    <>
      <Flex justifyContent='space-between' mb='2'>
        <FormLabel htmlFor='range1' fontSize='md' fontWeight='bold'>
          가격
        </FormLabel>

        <Button
          size='xs'
          isDisabled={!Object.keys(rangeValue).length}
          onClick={onClickHandler}>
          필터 적용 해제
        </Button>
      </Flex>

      <HStack>
        <NumberInput
          id='range1'
          min={MIN_RANGE}
          max={MAX_RANGE}
          step={RANGE_STEP}
          value={rangeValue[0]?.toLocaleString() ?? MIN_RANGE.toLocaleString()}
          title='가격 범위 최솟값'
          onChange={e => onChangeHandler(e, 0)}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <Text>-</Text>

        <NumberInput
          id='range2'
          value={rangeValue[1]?.toLocaleString() ?? MAX_RANGE.toLocaleString()}
          min={MIN_RANGE}
          max={MAX_RANGE}
          step={RANGE_STEP}
          onChange={e => onChangeHandler(e, 1)}
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
        onChange={onChangeHandler}
        focusThumbOnChange={false}
        value={[rangeValue[0] ?? MIN_RANGE, rangeValue[1] ?? MAX_RANGE]}
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
