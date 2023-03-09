import { useSelectedFilterContext } from '../../contexts/FilterContext';
import { Box, Button, HStack, Text } from '@chakra-ui/react';

const SelectedPrice = () => {
  const { selectedPriceFilter, resetPriceFilter } = useSelectedFilterContext();

  if (
    selectedPriceFilter.minPrice === 0 ||
    selectedPriceFilter.maxPrice === Number.POSITIVE_INFINITY
  ) {
    return;
  }

  return (
    <Box bg='gray.200' borderWidth='1px' borderRadius='lg' maxW='140px'>
      <HStack>
        <Text>{selectedPriceFilter.minPrice}</Text>
        <Text>~</Text>
        <Text>{selectedPriceFilter.maxPrice}</Text>
        <Button
          onClick={() => {
            resetPriceFilter();
          }}>
          X
        </Button>
      </HStack>
    </Box>
  );
};

export default SelectedPrice;
