import { useSelectedFilterContext } from '../../contexts/FilterContext';
import { Button } from '@chakra-ui/react';

const ResetFilterButton = () => {
  const { resetAllFilter } = useSelectedFilterContext();
  return (
    <Button w='100%' onClick={resetAllFilter} colorScheme='green'>
      초기화
    </Button>
  );
};

export default ResetFilterButton;
