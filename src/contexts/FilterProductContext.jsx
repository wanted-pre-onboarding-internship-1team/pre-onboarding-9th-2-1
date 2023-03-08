import { useFilterProduct } from '../hooks/useFilterProduct';
import { createContext, useContext } from 'react';

const FilterValueContext = createContext();
const FilterActionContext = createContext();

export const FilterProductProvider = ({ children }) => {
  const [filterProduct, { setFilterProduct, resetFilterProduct, spaceFilter }] =
    useFilterProduct([]);
  return (
    <FilterValueContext.Provider value={filterProduct}>
      <FilterActionContext.Provider
        value={{ setFilterProduct, resetFilterProduct, spaceFilter }}>
        {children}
      </FilterActionContext.Provider>
    </FilterValueContext.Provider>
  );
};

export const useFilterValueContext = () => useContext(FilterValueContext);
export const useFilterActionContext = () => useContext(FilterActionContext);
