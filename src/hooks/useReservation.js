import { useReducer } from 'react';

const ReservationReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const { newProduct } = action;

      return [...state, newProduct];

    case 'DELETE':
      const { idx } = action;

      return state.filter(product => product.idx !== idx);
    default:
      throw new Error(`알 수 없는 액션 타입입니다.`);
  }
};

const useReservation = initialState => {
  const [products, dispatch] = useReducer(ReservationReducer, initialState);

  const addReservation = newProduct => {
    dispatch({ type: 'ADD', newProduct });
  };

  const deleteReservation = idx => {
    dispatch({ type: 'DELETE', idx });
  };

  return [products, { addReservation, deleteReservation }];
};

export default useReservation;
