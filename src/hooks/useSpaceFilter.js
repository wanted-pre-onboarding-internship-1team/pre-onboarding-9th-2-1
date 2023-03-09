import { useSelectedFilterContext } from '../contexts/FilterContext';

const useSpaceFilter = space => {
  const { addSpaceFilter, deleteSpaceFilter, isSelectedSpace } =
    useSelectedFilterContext();
  const handleToggle = () => {
    if (isSelectedSpace(space)) {
      deleteSpaceFilter(space);
      return;
    }
    addSpaceFilter(space);
  };

  const buttonColor = isSelectedSpace(space) ? 'green' : 'gray';
  return { buttonColor, handleToggle };
};

export default useSpaceFilter;
