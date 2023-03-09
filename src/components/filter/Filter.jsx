import { getProduct } from '../../apis/api';
import { useFilterContext } from '../../contexts/FilterContext';
import PriceFilter from './PriceFilter';
import SelectedFilter from './SelectedFilter';
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
      {/* <SelectedFilter /> */}
    </Box>
  );
};
export default Filter;
