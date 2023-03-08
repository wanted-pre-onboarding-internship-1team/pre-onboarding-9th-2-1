import PriceFilterList from './PriceFilterList';
import PriceRangeInput from './PriceRangeInput';
import { VStack } from '@chakra-ui/react';

const isDuplicateRange = (priceFilter, min, max) => {
  return priceFilter.find(range => range.min === min && range.max === max);
};

function PriceFilter({ priceFilter, setPriceFilter }) {
  const addPriceFilterHandler = ({ min, max }) => {
    if (isDuplicateRange(priceFilter, min, max)) return;
    setPriceFilter(prev => [...prev, { min, max }]);
  };

  const removePriceFilterHandler = ({ min, max }) => {
    setPriceFilter(prev =>
      prev.filter(range => range.min !== min && range.max !== max)
    );
  };
  return (
    <VStack mb={3}>
      <PriceRangeInput onAdd={addPriceFilterHandler} />
      <PriceFilterList
        priceFilter={priceFilter}
        onRemove={removePriceFilterHandler}
      />
    </VStack>
  );
}

export default PriceFilter;
