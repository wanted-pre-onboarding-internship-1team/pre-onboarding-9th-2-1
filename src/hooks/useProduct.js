import { useReducer } from 'react';

const productReducer = (products, action) => {
  const { newProduct, targetProductIdx } = action;

  switch (action.type) {
    case 'ADD':
      const find = products.find(item => {
        return item.idx === newProduct.idx;
      });
      //처음 등록되는 상품일시
      if (find === undefined) {
        localStorage.setItem(
          'products',
          JSON.stringify([...products, { ...newProduct, count: 1 }])
        );
        return [...products, { ...newProduct, count: 1 }];
      }
      // 기존에 있는 상품일때
      const newProductList = products.map(item => {
        // 최대수량이 넘어가면 그대로 기존꺼 리턴
        if (item.idx === newProduct.idx) {
          if (item.count + 1 > item.maximumPurchases) {
            return item;
          }
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
      localStorage.setItem('products', JSON.stringify(newProductList));
      return newProductList;

    case 'DELETE':
      const deletedList = products.filter(
        item => item.idx !== targetProductIdx
      );
      localStorage.setItem('products', JSON.stringify(deletedList));
      return deletedList;
    default:
      throw Error(`${action.type} : 알 수 없는 액션 타입입니다.`);
  }
};

export const useProduct = () => {
  const [response, dispatch] = useReducer(productReducer, []);

  const addProduct = newProduct => {
    dispatch({ type: 'ADD', newProduct });
  };

  const deleteProduct = targetProductIdx => {
    dispatch({ type: 'DELETE', targetProductIdx });
  };

  return [response, { addProduct, deleteProduct }];
};
