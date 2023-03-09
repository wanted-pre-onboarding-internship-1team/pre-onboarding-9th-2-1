import { useProductValueContext } from '../contexts/ProductContext';
import { useReducer } from 'react';

function productReducer(productList, action) {
  const { targetIdx } = action;

  switch (action.type) {
    case 'INCREASE':
      const [increaseProduct, increaseProductIndex] = findTargetItemAndIndex(
        productList,
        targetIdx
      );
      if (increaseProduct.currentCount < increaseProduct.maximumPurchases) {
        increaseProduct.currentCount += 1;
      }

      const [prevIncreaseList, afterIncreaseList] = getListBetweenTarget(
        productList,
        increaseProductIndex
      );

      return [
        ...prevIncreaseList,
        { ...increaseProduct },
        ...afterIncreaseList,
      ];
    case 'DECREASE':
      const [decreaseProduct, decreaseProductIndex] = findTargetItemAndIndex(
        productList,
        targetIdx
      );
      if (decreaseProduct.currentCount > 0) {
        decreaseProduct.currentCount -= 1;
      }

      const [prevDecreaseList, afterDecreaseList] = getListBetweenTarget(
        productList,
        decreaseProductIndex
      );
      return [
        ...prevDecreaseList,
        { ...decreaseProduct },
        ...afterDecreaseList,
      ];
    case 'Delete':
      return productList.filter(item => item.idx !== targetIdx);
    default:
      throw Error(`${action.type} : 알 수 없는 액션 타입입니다.`);
  }
}

export default function useReservations() {
  const productList = useProductValueContext();
  const [calcedProductList, dispatch] = useReducer(
    productReducer,
    productList.map(item => ({ ...item, currentCount: 1 }))
  );

  const increaseProduct = targetIdx => {
    dispatch({ type: 'INCREASE', targetIdx });
  };

  const decreaseProduct = targetIdx => {
    dispatch({ type: 'DECREASE', targetIdx });
  };

  const deleteProduct = targetIdx => {
    dispatch({ type: 'Delete', targetIdx });
  };

  const totalPrice = calcedProductList.reduce(
    (prev, curr) => prev + curr.currentCount * curr.price,
    0
  );
  return {
    calcedProductList,
    totalPrice,
    increaseProduct,
    decreaseProduct,
    deleteProduct,
  };
}

function findTargetItemAndIndex(originList, targetIdx) {
  const item = originList.find(item => item.idx === targetIdx);
  const index = originList.findIndex(item => item.idx === targetIdx);
  return [item, index];
}

function getListBetweenTarget(originList, targetIndex) {
  const prevList = originList.slice(0, targetIndex);
  const afterList = originList.slice(targetIndex + 1);
  return [prevList, afterList];
}
