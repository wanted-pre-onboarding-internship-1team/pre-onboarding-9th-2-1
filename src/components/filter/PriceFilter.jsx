import {
  useFilterContext,
  useSelectedFilterContext,
} from '../../contexts/FilterContext';
import { Button, HStack, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';

const PriceFilter = () => {
  const { priceFilter } = useFilterContext();
  const { selectPriceFilter } = useSelectedFilterContext();
  const [minPrice, setMinPrice] = useState(priceFilter.minPrice);
  const [maxPrice, setMaxPrice] = useState(priceFilter.maxPrice);
  const handleMinChange = event => setMinPrice(event.target.value);
  const handleMaxChange = event => setMaxPrice(event.target.value);

  const handleSetPrice = () => {
    if (minPrice < priceFilter.minPrice || maxPrice > priceFilter.maxPrice) {
      alert(
        `${priceFilter.minPrice?.toLocaleString()} ~ ${priceFilter.maxPrice?.toLocaleString()} 사이의 값만 입력 가능합니다.`
      );
      return;
    }
    selectPriceFilter({ minPrice, maxPrice });
  };

  return (
    <HStack>
      <Text>가격</Text>
      <Input
        onChange={handleMinChange}
        placeholder={`최소 : ${priceFilter.minPrice?.toLocaleString()} 원`}
      />
      <Text>~</Text>
      <Input
        onChange={handleMaxChange}
        placeholder={`최대 : ${priceFilter.maxPrice?.toLocaleString()} 원`}
      />
      <Button onClick={handleSetPrice}>적용</Button>
    </HStack>
  );
};

export default PriceFilter;
