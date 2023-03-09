import { useFilterContext } from '../../contexts/FilterContext';
import { HStack, Text, Button } from '@chakra-ui/react';

const SpaceFilter = () => {
  const { spaceCategoryFilter } = useFilterContext();

  return (
    <HStack>
      <Text>지역</Text>
      {spaceCategoryFilter.map(space => {
        return <Button>{space}</Button>;
      })}
    </HStack>
  );
};

export default SpaceFilter;
