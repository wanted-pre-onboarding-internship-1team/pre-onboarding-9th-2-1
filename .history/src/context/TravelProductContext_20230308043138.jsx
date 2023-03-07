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

  const handleAddProduct = useCallback(item => {
    if (reservationList.find(i => i.idx === item.idx))
      return alert('이미 제품을 담으셨습니다.');
    console.log(reservationList);
    setReservationList(prev => [...prev, item]);
    alert('상품을 장바구니에 담았습니다.');
  }, []);

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
