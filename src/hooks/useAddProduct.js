import { useProductActionContext } from '../contexts/ProductContext';

const useAddProduct = product => {
  const { addProduct } = useProductActionContext();

  const onClickHandler = e => {
    e.stopPropagation();
    addProduct(product);
  };

  return onClickHandler;
};

export default useAddProduct;
