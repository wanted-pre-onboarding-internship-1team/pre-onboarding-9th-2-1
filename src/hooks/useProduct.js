import { useReducer } from 'react';

const productReducer = (products, action) => {
  const { newProduct, targetProduct } = action;

  switch (action.type) {
    case 'ADD':
      const newProductList = [...products, newProduct];

      const filterList = newProductList.reduce((acc, cur) => {
        const target = acc.find(item => item.idx === cur.idx);
        if (target) {
          target.count += 1;
        } else {
          acc.push({ ...cur, count: 1 });
        }
        return acc;
      }, []);

      localStorage.setItem('products', JSON.stringify(filterList));

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
  const [response, dispatch] = useReducer(productReducer, []);

  const addProduct = newProduct => {
    dispatch({ type: 'ADD', newProduct });
  };

  const deleteProduct = targetProduct => {
    dispatch({ type: 'DELETE', targetProduct });
  };

  return [response, { addProduct, deleteProduct }];
};
