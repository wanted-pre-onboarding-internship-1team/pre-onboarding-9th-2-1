import { getLocalStorage } from '../util/getLocalStorage';
import { useReducer } from 'react';

const productReducer = (products, action) => {
  const { newProduct, idx, quantity } = action;

  switch (action.type) {
    case 'ADD':
      const isDuplicate = products.find(
        product => product.idx === newProduct.idx
      );

      let newProductList;

      if (isDuplicate) {
        newProductList = products.map(product =>
          product.idx === newProduct.idx
            ? { ...product, quantity: product.quantity + quantity }
            : product
        );
      } else {
        newProductList = [...products, { ...newProduct, quantity: 1 }];
      }

      localStorage.setItem('products', JSON.stringify(newProductList));

      return newProductList;
    case 'SET':
      const productList = products.map(product =>
        product.idx === newProduct.idx ? { ...product, quantity } : product
      );

      localStorage.setItem('products', JSON.stringify(productList));
      return productList;
    case 'DELETE':
      const deletedList = products.filter(product => product.idx !== idx);

      localStorage.setItem('products', JSON.stringify(deletedList));

      return deletedList;
    default:
      throw Error(`${action.type} : 알 수 없는 액션 타입입니다.`);
  }
};

export const useProduct = () => {
  const initialState = getLocalStorage('products', []);
  const [response, dispatch] = useReducer(productReducer, initialState);

  const addProduct = (newProduct, quantity = 1) => {
    dispatch({ type: 'ADD', newProduct, quantity });
  };

  const setProduct = (newProduct, quantity) => {
    dispatch({ type: 'SET', newProduct, quantity });
  };

  const deleteProduct = idx => {
    dispatch({ type: 'DELETE', idx });
  };

  return [response, { addProduct, setProduct, deleteProduct }];
};
