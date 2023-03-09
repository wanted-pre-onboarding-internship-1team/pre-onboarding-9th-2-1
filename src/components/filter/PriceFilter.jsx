import { useFilterContext } from '../../contexts/FilterContext';
import { HStack, Input, Text } from '@chakra-ui/react';

const PriceFilter = () => {
  const { priceFilter } = useFilterContext();
  return (
    <HStack>
      <Text>가격</Text>
      <Input
        placeholder={`최소 : ${priceFilter.minPrice?.toLocaleString()} 원`}
      />
      <Text>~</Text>
      <Input
        placeholder={`최대 : ${priceFilter.maxPrice?.toLocaleString()} 원`}
      />
    </HStack>
  );
};

export default PriceFilter;
