import { useFilterContext } from '../../contexts/FilterContext';
import SpaceFilterButton from './SpaceFilterButton';
import { HStack, Text } from '@chakra-ui/react';

const SpaceFilter = () => {
  const { spaceCategoryFilter } = useFilterContext();

  return (
    <HStack>
      <Text>지역</Text>
      {spaceCategoryFilter.map(space => {
        return <SpaceFilterButton space={space} key={space} />;
      })}
    </HStack>
  );
};

export default SpaceFilter;
