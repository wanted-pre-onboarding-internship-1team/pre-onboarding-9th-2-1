import { createContext, useState } from 'react';

const TravelProductContext = createContext(undefined);

export default function TravelProductContextProvider() {
  const [selectedItem, setSelectedItem] = useState(null);
  const selectItem = data => setSelectedItem(data);
  return <div></div>;
}
