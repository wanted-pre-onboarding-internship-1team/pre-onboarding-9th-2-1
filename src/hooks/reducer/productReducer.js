import setReservedStorage from '../../util/setReservedStorage';

const productReducer = (products, action) => {
  const { newProduct, targetProduct, changedCount } = action;

  switch (action.type) {
    case 'ADD':
      const filteredList = products.filter(product => {
        return product.idx === newProduct.idx;
      });
      const newProductList = addProduct(filteredList, products, newProduct);
      return newProductList;
    case 'SET_COUNT':
      const countUpdatedList = updateCount(
        products,
        targetProduct,
        changedCount
      );
      setReservedStorage(countUpdatedList);
      return countUpdatedList;
    case 'DELETE':
      const deletedList = products.filter(
        item => item.idx !== targetProduct.idx
      );
      setReservedStorage(deletedList);
      return deletedList;
    default:
      throw Error(`${action.type} : 알 수 없는 액션 타입입니다.`);
  }
};

function addProduct(filteredList, products, newProduct) {
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
  setReservedStorage(newProductList);
  return newProductList;
}

function updateCount(products, targetProduct, changedCount) {
  let countUpdatedList = products.map(product => {
    if (
      product.idx === targetProduct.idx &&
      product.count <= product.maximumPurchases
    ) {
      product.count = changedCount;
    }
    return product;
  });
  return countUpdatedList.filter(product => product.count > 0) ?? [];
}

export default productReducer;
