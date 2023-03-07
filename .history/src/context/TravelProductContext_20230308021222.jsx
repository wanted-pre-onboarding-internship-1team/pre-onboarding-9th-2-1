import { createContext, useCallback, useState } from 'react';

const TravelProductContext = createContext(undefined);

export default function TravelProductContextProvider() {
  const [selectedItem, setSelectedItem] = useState(null);
  const selectItem = useCallback(
    data => setSelectedItem(data),
    [setSelectedItem]
  );

  return <div></div>;
}
