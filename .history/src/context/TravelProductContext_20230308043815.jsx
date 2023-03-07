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

  const handleAddProduct = useCallback(
    item => {
      console.log(reservationList);
      console.log(reservationList.find(i => i.idx === item.idx));

      if (reservationList.find(i => i.idx === item.idx))
        return alert('이미 제품을 담으셨습니다.');
      setReservationList(prev => [...prev, item]);
      alert('상품을 장바구니에 담았습니다.');
    },
    [reservationList]
  );
  console.log(reservationList);
  const context = useMemo(
    () => ({ selectItem, selectedItem, handleAddProduct }),
    [selectedItem, selectItem, handleAddProduct]
  );

  return (
    <TravelProductContext.Provider value={context}>
      {children}
    </TravelProductContext.Provider>
  );
}

export const useTravelProductContext = () => useContext(TravelProductContext);
