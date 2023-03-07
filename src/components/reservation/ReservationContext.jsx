import useReservation from '../../hooks/useReservation';
import { createContext, useContext } from 'react';

const ReservationContext = createContext({});

export function ReservationContextProvider({ children }) {
  const [reservations, { addReservation }] = useReservation([]);

  return (
    <ReservationContext.Provider value={{ reservations, addReservation }}>
      {children}
    </ReservationContext.Provider>
  );
}

export const useReservationContext = () => useContext(ReservationContext);
