import { useReducer } from 'react';

const productReducer = (products, action) => {
  const { newProduct, targetProduct } = action;

  switch (action.type) {
    case 'ADD':
      if (products.find(item => item.idx === newProduct.idx))
        return [...products];
      const newProductList = [...products, { ...newProduct, currentCount: 1 }];
      localStorage.setItem('products', JSON.stringify(newProductList));
      return newProductList;
    case 'DELETE':
      const deletedList = products.filter(
        item => item.idx !== targetProduct.idx
      );
      localStorage.setItem('products', JSON.stringify(deletedList));

      return deletedList;
    case 'INCREASE':
      return products.map(item => {
        if (
          item.idx === targetProduct.idx &&
          item.currentCount < targetProduct.maximumPurchases
        )
          item.currentCount += 1;
        return item;
      });
    case 'DECREASE':
      return products.map(item => {
        if (item.idx === targetProduct.idx && item.currentCount > 1)
          item.currentCount -= 1;
        return item;
      });
    default:
      throw Error(`${action.type} : 알 수 없는 액션 타입입니다.`);
  }
};

export const useProduct = () => {
  const [response, dispatch] = useReducer(productReducer, []);

  const addProduct = newProduct => {
    dispatch({ type: 'ADD', newProduct });
  };

  const deleteProduct = targetProduct => {
    dispatch({ type: 'DELETE', targetProduct });
  };

  const increaseProduct = targetProduct => {
    dispatch({ type: 'INCREASE', targetProduct });
  };

  const decreaseProduct = targetProduct => {
    dispatch({ type: 'DECREASE', targetProduct });
  };

  return [
    response,
    { addProduct, deleteProduct, decreaseProduct, increaseProduct },
  ];
};
