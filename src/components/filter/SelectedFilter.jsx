import { useSelectedFilterContext } from '../../contexts/FilterContext';
import { Button } from '@chakra-ui/react';

const SelectedFilter = () => {
  const { selectedSpaceCategoryFilter } = useSelectedFilterContext();
  return (
    <>
      {[...selectedSpaceCategoryFilter].map(space => {
        return <Button>{space}</Button>;
      })}
    </>
  );
};

export default SelectedFilter;
