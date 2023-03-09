import { getProduct } from '../../apis/api';
import { useFilterContext } from '../../contexts/FilterContext';
import PriceFilter from './PriceFilter';
import SpaceFilter from './SpaceFilter';
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';

const Filter = () => {
  const { initFilter } = useFilterContext();
  useEffect(() => {
    getProduct().then(({ data }) => initFilter(data));
  }, []);

  return (
    <Box>
      <PriceFilter />
      <SpaceFilter />
    </Box>
  );
};
export default Filter;
