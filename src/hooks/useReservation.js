import { useReducer } from 'react';

function reservationReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];

    default:
      return new Error();
  }
}

function useReservation(initialState) {
  const [reservations, dispatch] = useReducer(reservationReducer, initialState);

  const addReservation = reservation => {
    dispatch({ type: 'ADD', payload: reservation });
  };

  return [reservations, { addReservation }];
}

export default useReservation;
