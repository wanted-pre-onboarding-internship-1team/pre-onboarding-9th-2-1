import usePriceFilter from '../../hooks/usePriceFilter.js';
import { Button, HStack, Input, Text } from '@chakra-ui/react';

const PriceFilter = () => {
  const {
    minPricePlaceHolrder,
    maxPricePlaceHolrder,
    handleMinChange,
    handleMaxChange,
    handleSetPrice,
  } = usePriceFilter();

  return (
    <HStack>
      <Text>가격</Text>
      <Input
        onChange={handleMinChange}
        placeholder={`최소 : ${minPricePlaceHolrder} 원`}
      />
      <Text>~</Text>
      <Input
        onChange={handleMaxChange}
        placeholder={`최대 : ${maxPricePlaceHolrder} 원`}
      />
      <Button onClick={handleSetPrice}>적용</Button>
    </HStack>
  );
};

export default PriceFilter;
