import useReservation from '../hooks/useReservation';
import { createContext, useContext } from 'react';

const ReservationContext = createContext();

export const ReservationProvider = ({ children }) => {
  const [products, { addReservation, deleteReservation }] = useReservation([]);

  const value = { products, addReservation, deleteReservation };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservationContext = () => useContext(ReservationContext);
