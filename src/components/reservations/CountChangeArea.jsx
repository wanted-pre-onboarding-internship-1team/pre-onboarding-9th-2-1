import { useProductActionContext } from '../../contexts/ProductContext';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

const CountChangeArea = ({ product }) => {
  const { updateCount } = useProductActionContext();

  const { count, maximumPurchases } = product;
  return (
    <NumberInput
      onChange={count => {
        updateCount(product, count);
      }}
      defaultValue={count}
      min={0}
      max={maximumPurchases}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default CountChangeArea;
