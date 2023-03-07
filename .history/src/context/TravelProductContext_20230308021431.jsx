import { createContext, useCallback, useMemo, useState } from 'react';

const TravelProductContext = createContext(undefined);

export default function TravelProductContextProvider({ children }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const selectItem = useCallback(
    data => setSelectedItem(data),
    [setSelectedItem]
  );

  const context = useMemo(
    () => ({ selectItem, selectedItem }),
    [selectedItem, selectItem]
  );

  return (
    <TravelProductContext.Provider>{children}</TravelProductContext.Provider>
  );
}
