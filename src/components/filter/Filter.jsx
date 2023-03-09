import { getProduct } from '../../apis/api';
import { useFilterContext } from '../../contexts/FilterContext';
import PriceFilter from './PriceFilter';
import ResetFilterButton from './ResetFilterButton';
import SelectedPrice from './SelectedPrice';
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
      <SelectedPrice />
      <SpaceFilter />
      <ResetFilterButton />
    </Box>
  );
};
export default Filter;
