import { useReducer } from 'react';

const productFilterReducer = (state, action) => {
  const { priceRange } = action;

  switch (action.type) {
    case 'filterByPrice':
      const storageList = JSON.parse(localStorage.getItem('productList'));
      const filteredList = storageList.filter(
        product =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );
      return filteredList;

    case 'filterBySpace':
      return;

    default:
      throw Error(`${action.type} : 알 수 없는 액션 타입입니다.`);
  }
};

export const useProductFilter = () => {
  const initState = () => {
    return JSON.parse(localStorage.getItem('productList')) ?? [];
  };

  const [products, dispatch] = useReducer(productFilterReducer, initState());

  const filterByPrice = priceRange => {
    dispatch({ type: 'filterByPrice', priceRange });
  };

  // const filterBySpace = () => {
  //   dispatch({ type: 'filterBySpace' });
  // };

  return [products, { filterByPrice }];
};
