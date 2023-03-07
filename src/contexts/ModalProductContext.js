import { createContext, useContext, useState } from 'react';

const ModalProductContext = createContext();

export const ModalProductProvider = ({ children }) => {
  const [ModalProduct, setModalProduct] = useState(null);

  const value = { ModalProduct, setModalProduct };

  return (
    <ModalProductContext.Provider value={value}>
      {children}
    </ModalProductContext.Provider>
  );
};

export const useModalProductContext = () => useContext(ModalProductContext);
