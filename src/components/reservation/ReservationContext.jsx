import { createContext, useState, useContext } from 'react';

const ReservedItemContext = createContext(null);

export const ReservedItemProvider = ({ children }) => {
  const [reservedItem, setReservedItem] = useState([]);

  // FIX ME
  const addReservedItem = item => {
    setReservedItem([...reservedItem, item]);
    console.log(reservedItem);
  };

  return (
    <ReservedItemContext.Provider value={{ reservedItem, addReservedItem }}>
      {children}
    </ReservedItemContext.Provider>
  );
};

export const useReservedItem = () => useContext(ReservedItemContext);
