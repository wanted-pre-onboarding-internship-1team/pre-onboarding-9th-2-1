import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const TravelProductContext = createContext(undefined);

export default function TravelProductContextProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modal, setmodal] = useState({
    isOpen: undefined,
    onOpen: undefined,
    onClose: undefined,
  });
  const selectItem = useCallback(
    data => setSelectedItem(data),
    [setSelectedItem]
  );

  const context = useMemo(
    () => ({ selectItem, selectedItem }),
    [selectedItem, selectItem]
  );

  return (
    <TravelProductContext.Provider value={context}>
      {children}
    </TravelProductContext.Provider>
  );
}

export const useTravelProductContext = () => useContext(TravelProductContext);
