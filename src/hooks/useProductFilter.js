import { useReducer } from 'react';

const productFilterReducer = (state, action) => {
  const { priceRange, selectedSpace } = action;

  const storageList = JSON.parse(localStorage.getItem('productList'));

  switch (action.type) {
    case 'filterByPrice':
      const filteredListByPrice = storageList.filter(
        product =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );
      // localStorage.setItem('productList', JSON.stringify(filteredListByPrice));
      return filteredListByPrice;

    case 'filterBySpace':
      const filteredListBySpace = storageList.filter(product =>
        selectedSpace.includes(product.spaceCategory)
      );
      // localStorage.setItem('productList', JSON.stringify(filteredListBySpace));
      return filteredListBySpace;

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

  const filterBySpace = selectedSpace => {
    dispatch({ type: 'filterBySpace', selectedSpace });
  };

  return [products, { filterByPrice, filterBySpace }];
};
