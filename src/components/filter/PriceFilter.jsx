import PriceFilterList from './PriceFilterList';
import PriceRangeInput from './PriceRangeInput';
import { VStack } from '@chakra-ui/react';

function PriceFilter({ priceFilter, setPriceFilter }) {
  const addPriceFilterHandler = ({ min, max }) => {
    setPriceFilter(prev => [...prev, { min, max }]);
  };
  return (
    <VStack mb={3}>
      <PriceRangeInput onAdd={addPriceFilterHandler} />
      <PriceFilterList priceFilter={priceFilter} />
    </VStack>
  );
}

export default PriceFilter;
