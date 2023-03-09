import { useSelectedFilterContext } from '../../contexts/FilterContext';
import { Button } from '@chakra-ui/react';

const SpaceFilterButton = ({ space }) => {
  const { addSpaceFilter, deleteSpaceFilter, isSelectedSpace } =
    useSelectedFilterContext();
  return (
    <Button
      colorScheme={isSelectedSpace(space) ? 'green' : 'gray'}
      onClick={() => {
        if (isSelectedSpace(space)) {
          deleteSpaceFilter(space);
          return;
        }
        addSpaceFilter(space);
      }}>
      {space}
    </Button>
  );
};

export default SpaceFilterButton;
