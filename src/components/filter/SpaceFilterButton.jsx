import useSpaceFilter from '../../hooks/useSpaceFilter';
import { Button } from '@chakra-ui/react';

const SpaceFilterButton = ({ space }) => {
  const { buttonColor, handleToggle } = useSpaceFilter(space);

  return (
    <Button colorScheme={buttonColor} onClick={handleToggle}>
      {space}
    </Button>
  );
};

export default SpaceFilterButton;
