import { useSelectedFilterContext } from '../../contexts/FilterContext';
import { HStack, Text } from '@chakra-ui/react';

const SelectedPrice = () => {
  const { selectedPriceFilter } = useSelectedFilterContext();

  if (
    selectedPriceFilter.minPrice === 0 ||
    selectedPriceFilter.maxPrice === Number.POSITIVE_INFINITY
  ) {
    return;
  }

  return (
    <HStack>
      <Text>{selectedPriceFilter.minPrice}</Text>
      <Text>~</Text>
      <Text>{selectedPriceFilter.maxPrice}</Text>
    </HStack>
  );
};

export default SelectedPrice;
