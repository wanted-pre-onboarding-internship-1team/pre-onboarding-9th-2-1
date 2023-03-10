import { useProduct } from './../hooks/useProduct';
import { createContext, useContext } from 'react';

const ProductValueContext = createContext();
const ProductActionContext = createContext();

export const ProductProvider = ({ children }) => {
  const [
    addedList,
    { addProduct, deleteProduct, decreaseProduct, increaseProduct },
  ] = useProduct([]);

  return (
    <ProductValueContext.Provider value={addedList}>
      <ProductActionContext.Provider
        value={{ addProduct, deleteProduct, decreaseProduct, increaseProduct }}>
        {children}
      </ProductActionContext.Provider>
    </ProductValueContext.Provider>
  );
};

export const useProductValueContext = () => useContext(ProductValueContext);
export const useProductActionContext = () => useContext(ProductActionContext);
