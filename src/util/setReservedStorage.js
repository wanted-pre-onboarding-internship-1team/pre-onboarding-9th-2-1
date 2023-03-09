const setReservedStorage = productList => {
  localStorage.setItem('products', JSON.stringify(productList));
};

export default setReservedStorage;
