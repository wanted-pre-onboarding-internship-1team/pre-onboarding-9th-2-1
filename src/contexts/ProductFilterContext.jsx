import { useProductFilter } from '../hooks/useProductFilter';
import { createContext, useContext } from 'react';

export const ProductFilterValueContext = createContext();
export const ProductFilterActionContext = createContext();

export const ProductFilterProvider = ({ children }) => {
  const [products, { filterByPrice, filterBySpace }] = useProductFilter();

  return (
    <ProductFilterValueContext.Provider value={{ products }}>
      <ProductFilterActionContext.Provider
        value={{ filterByPrice, filterBySpace }}>
        {children}
      </ProductFilterActionContext.Provider>
    </ProductFilterValueContext.Provider>
  );
};

export const useProductFilterValueContext = () =>
  useContext(ProductFilterValueContext);
export const useProductFilterActionContext = () =>
  useContext(ProductFilterActionContext);
