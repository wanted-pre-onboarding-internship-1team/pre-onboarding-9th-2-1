import { useReducer, useCallback } from 'react';

const filterProductReducer = (state, action) => {
  const originProductList = JSON.parse(
    localStorage.getItem('originProductList')
  );
  const { payload } = action;
  switch (action.type) {
    case 'SET':
      return action.filterProduct;
    case 'RESET':
      return originProductList;
    case 'SPACE_FILTER':
      return originProductList.filter(item =>
        payload.includes(item.spaceCategory)
      );
    case 'PRICE_FILTER':
      const newProductList = [];
      originProductList.forEach(item => {
        payload.forEach(priceRange => {
          if (item.price >= priceRange.min && item.price <= priceRange.max) {
            newProductList.push(item);
          }
        });
      });
      return [...new Set(newProductList)];
    case 'ALL_FILTER':
      const andFilterProductList = [];
      const { selectedSpace, priceFilter } = payload;

      // 금액을 통해 필터링된 상품리스트
      originProductList.forEach(item => {
        priceFilter.forEach(priceRange => {
          if (item.price >= priceRange.min && item.price <= priceRange.max) {
            andFilterProductList.push(item);
          }
        });
      });

      // 중복 제거후 공간카테고리에 따라 필터링
      return [...new Set(andFilterProductList)].filter(item =>
        selectedSpace.includes(item.spaceCategory)
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

  // 가격에 따라 필터링 하는 함수
  const priceFilterProduct = useCallback(priceRangeList => {
    if (priceRangeList.length === 0) {
      dispatch({ type: 'RESET' });
      return;
    }
    dispatch({ type: 'PRICE_FILTER', payload: priceRangeList });
  }, []);

  // 가격에따라도 필터링되야하고 공간카테고리에 따라도 필터링되야할때
  const allFilterProduct = useCallback(({ selectedSpace, priceFilter }) => {
    dispatch({
      type: 'ALL_FILTER',
      payload: {
        selectedSpace,
        priceFilter,
      },
    });
  }, []);
  return [
    filterProduct,
    {
      setFilterProduct,
      resetFilterProduct,
      spaceFilterProduct,
      priceFilterProduct,
      allFilterProduct,
    },
  ];
};
