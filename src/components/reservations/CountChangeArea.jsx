import { useProductActionContext } from '../../contexts/ProductContext';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Text,
  CardFooter,
} from '@chakra-ui/react';

const CountChangeArea = ({ product }) => {
  const { updateCount } = useProductActionContext();

  const { count, maximumPurchases } = product;
  return (
    <CardFooter justifyContent='space-between'>
      <Text fontSize='sm' py='2'>
        (최대 구매 가능 개수: {maximumPurchases}개)
      </Text>
      <NumberInput
        onChange={count => {
          updateCount(product, count);
        }}
        defaultValue={count}
        min={0}
        max={maximumPurchases}
        w='120px'>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </CardFooter>
  );
};

export default CountChangeArea;
