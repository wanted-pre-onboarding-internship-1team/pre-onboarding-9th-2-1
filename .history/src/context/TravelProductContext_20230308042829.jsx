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
  const [reservationList, setReservationList] = useState([]);

  const selectItem = useCallback(
    data => {
      setSelectedItem(data);
    },
    [setSelectedItem]
  );

  const handleAddProduct = item => {
    if (reservationList.find(i => i.idx === item.idx))
      return alert('이미 제품을 담으셨습니다.');
    setReservationList(prev => [...prev, item]);
  };

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
