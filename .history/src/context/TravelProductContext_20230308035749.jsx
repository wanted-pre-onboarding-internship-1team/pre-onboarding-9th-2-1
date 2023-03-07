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
  console.log(selectItem);
  const selectItem = useCallback(
    data => {
      setSelectedItem(data);
    },
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
