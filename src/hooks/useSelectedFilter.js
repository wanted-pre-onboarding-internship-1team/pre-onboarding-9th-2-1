import { useReducer, useState } from 'react';

const spaceCategoryReducer = (spaceCategories, action) => {
  switch (action.type) {
    case 'ADD':
      const { newSpace } = action;
      spaceCategories.add(newSpace);
      return new Set(spaceCategories);
    case 'DELETE':
      const { deleteSpace } = action;
      spaceCategories.delete(deleteSpace);
      return new Set(spaceCategories);
    default:
      throw new Error('알 수 없는 액션 타입입니다.');
  }
};

const useSelectedFilter = () => {
  const [selectedPriceFilter, selectPriceFilter] = useState({
    minPrice: 0,
    maxPrice: Number.POSITIVE_INFINITY,
  });
  const [selectedSpaceCategoryFilter, dispatch] = useReducer(
    spaceCategoryReducer,
    new Set()
  );

  const resetPriceFilter = () => {
    selectPriceFilter({ minPrice: 0, maxPrice: Number.POSITIVE_INFINITY });
  };

  const addSpaceFilter = newSpace => {
    dispatch({ type: 'ADD', newSpace });
  };
  const deleteSpaceFilter = deleteSpace => {
    dispatch({ type: 'DELETE', deleteSpace });
  };
  const isSelectedSpace = space => {
    return selectedSpaceCategoryFilter.has(space);
  };

  return {
    selectedPriceFilter,
    selectPriceFilter,
    resetPriceFilter,
    selectedSpaceCategoryFilter,
    addSpaceFilter,
    deleteSpaceFilter,
    isSelectedSpace,
  };
};

export default useSelectedFilter;
