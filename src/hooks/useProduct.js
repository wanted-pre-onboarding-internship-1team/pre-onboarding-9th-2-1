import { useReducer } from 'react';

const productReducer = (products, action) => {
  const { newProduct, targetProduct } = action;

  switch (action.type) {
    case 'ADD':
      const filteredList = products.filter(product => {
        return product.idx === newProduct.idx;
      });
      let newProductList = [];
      if (filteredList.length > 0) {
        newProductList = products.map(product => {
          if (product.idx === newProduct.idx) {
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

  return [response, { addProduct, deleteProduct }];
};
