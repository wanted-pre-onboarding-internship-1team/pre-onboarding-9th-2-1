import { useReducer, useCallback } from 'react';

const filterProductReducer = (state, action) => {
  const originProductList = JSON.parse(
    localStorage.getItem('originProductList')
  );
  switch (action.type) {
    case 'SET':
      return action.filterProduct;
    case 'RESET':
      return originProductList;
    case 'SPACE_FILTER':
      const { payload } = action;
      return originProductList.filter(item =>
        payload.includes(item.spaceCategory)
      );
    default:
      throw Error(`${action.type} : 알 수 없는 액션 타입입니다.`);
  }
};

/**
 * 서버로부터 받아온 상품리스트를 관리하고 조작하는 hook
 * @param {any} initialState 초기값
 *
 */
export const useFilterProduct = initialState => {
  const [filterProduct, dispatch] = useReducer(
    filterProductReducer,
    initialState
  );

  const setFilterProduct = useCallback(filterProduct => {
    dispatch({ type: 'SET', filterProduct });
  }, []);

  // 필터된 상품리스트를 초기화하는 함수
  const resetFilterProduct = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  // 공간 카테고리에 따라 필터링하는 함수
  const spaceFilterProduct = useCallback(spaceCategorys => {
    if (spaceCategorys.length === 0) {
      dispatch({ type: 'RESET' });
      return;
    }
    dispatch({ type: 'SPACE_FILTER', payload: spaceCategorys });
  }, []);

  return [
    filterProduct,
    { setFilterProduct, resetFilterProduct, spaceFilterProduct },
  ];
};
