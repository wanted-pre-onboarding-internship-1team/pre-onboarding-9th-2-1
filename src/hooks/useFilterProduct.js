import { useReducer, useCallback } from 'react';

const filterProductReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.filterProduct;
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

  return [filterProduct, { setFilterProduct }];
};
