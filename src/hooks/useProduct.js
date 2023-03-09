import { useReducer } from 'react';

const productReducer = (products, action) => {
  const { newProduct, targetProduct, changedCount } = action;

  switch (action.type) {
    case 'ADD':
      const filteredList = products.filter(product => {
        return product.idx === newProduct.idx;
      });
      let newProductList = [];
      if (filteredList.length > 0) {
        newProductList = products.map(product => {
          if (
            product.idx === newProduct.idx &&
            product.count < product.maximumPurchases
          ) {
            product.count++;
          }
          return product;
        });
      } else {
        newProduct.count = 1;
        newProductList = [...products, newProduct];
      }
      localStorage.setItem('products', JSON.stringify(newProductList));
      return newProductList;
    case 'SET_COUNT':
      let countUpdatedList = products.map(product => {
        if (
          product.idx === targetProduct.idx &&
          product.count <= product.maximumPurchases
        ) {
          product.count = changedCount;
        }
        return product;
      });
      countUpdatedList = countUpdatedList.filter(product => product.count > 0);
      localStorage.setItem('products', JSON.stringify(countUpdatedList));
      return countUpdatedList;
    case 'DELETE':
      const deletedList = products.filter(
        item => item.idx !== targetProduct.idx
      );
      localStorage.setItem('products', JSON.stringify(deletedList));

      return deletedList;
    default:
      throw Error(`${action.type} : 알 수 없는 액션 타입입니다.`);
  }
};

export const useProduct = () => {
  const storagedList = JSON.parse(localStorage.getItem('products')) ?? [];

  const [response, dispatch] = useReducer(productReducer, [...storagedList]);

  const addProduct = newProduct => {
    dispatch({ type: 'ADD', newProduct });
  };

  const deleteProduct = targetProduct => {
    dispatch({ type: 'DELETE', targetProduct });
  };

  const updateCount = (targetProduct, changedCount) => {
    dispatch({ type: 'SET_COUNT', targetProduct, changedCount });
  };

  return [response, { addProduct, deleteProduct, updateCount }];
};
