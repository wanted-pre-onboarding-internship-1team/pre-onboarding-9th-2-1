import { getProduct } from '../../apis/api';
import { useFilterContext } from '../../contexts/FilterContext';
import { Box, HStack, Input, Text, Button } from '@chakra-ui/react';
import { useEffect } from 'react';

const Filter = () => {
  const { priceFilter, spaceCategoryFilter, initFilter } = useFilterContext();
  useEffect(() => {
    getProduct().then(({ data }) => initFilter(data));
  }, []);

  return (
    <Box>
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
      <HStack>
        {spaceCategoryFilter.map(space => {
          return <Button>{space}</Button>;
        })}
      </HStack>
    </Box>
  );
};
export default Filter;
