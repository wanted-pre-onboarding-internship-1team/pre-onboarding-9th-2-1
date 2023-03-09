import { useReducer } from 'react';

const productReducer = (products, action) => {
  const { newProduct, quantity, targetProduct } = action;

  switch (action.type) {
    case 'ADD':
      let newProductList = [];
      const existProduct = products.find(
        product => product.idx === newProduct.idx
      );
      if (existProduct) {
        existProduct.quantity = quantity;
        const etcProducts = products.filter(
          product => product.idx !== newProduct.idx
        );
        newProductList = [...etcProducts, existProduct];
      } else {
        newProduct.quantity = quantity;
        newProductList = [...products, newProduct];
      }
      localStorage.setItem('products', JSON.stringify(newProductList));

      return newProductList;
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

  const addProduct = (newProduct, quantity) => {
    dispatch({ type: 'ADD', newProduct, quantity });
  };

  const deleteProduct = targetProduct => {
    dispatch({ type: 'DELETE', targetProduct });
  };

  return [response, { addProduct, deleteProduct }];
};
