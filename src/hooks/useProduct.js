import productReducer from './reducer/productReducer';
import { useReducer } from 'react';

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
