import { useReducer } from 'react';

const productReducer = (products, action) => {
  const { newProduct, quantity, checkedItem } = action;

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
      newProductList = newProductList.sort((a, b) => {
        if (a.idx > b.idx) {
          return 1;
        }
        if (a.idx < b.idx) {
          return -1;
        }
        return 0;
      });
      localStorage.setItem('products', JSON.stringify(newProductList));

      return newProductList;

    case 'DELETE':
      if (typeof checkedItem === 'object') {
        checkedItem.forEach(el => {
          let deletedList = products.filter(item => item.idx !== el);
          products = deletedList;
        });
        localStorage.setItem('products', JSON.stringify(products));
        return products;
      } else {
        const deletedList = products.filter(item => item.idx !== checkedItem);
        localStorage.setItem('products', JSON.stringify(deletedList));

        return deletedList;
      }

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

  const deleteProduct = checkedItem => {
    dispatch({ type: 'DELETE', checkedItem });
  };

  return [response, { addProduct, deleteProduct }];
};
