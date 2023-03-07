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
  const [modal, setModal] = useState({
    isOpen: undefined,
    onOpen: undefined,
    onClose: undefined,
  });
	const selectItem = useCallback(
		{ data,isOpen onClose } => setSelectedItem(data),
    [setSelectedItem]
  );

  const context = useMemo(
    () => ({ selectItem, selectedItem, modal, setModal }),
    [selectedItem, selectItem, modal, setModal]
  );

  return (
    <TravelProductContext.Provider value={context}>
      {children}
    </TravelProductContext.Provider>
  );
}

export const useTravelProductContext = () => useContext(TravelProductContext);
