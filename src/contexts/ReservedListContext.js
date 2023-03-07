import { createContext, useContext, useReducer } from 'react';

const ReservedListContext = createContext();

const reserveListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const { newReserve } = action;
      state.add(newReserve);
      state = new Set(state);
      localStorage.setItem('reservedList', JSON.stringify(Array.from(state)));
      return state;
    case 'DELETE':
      const { deleteReserve } = action;
      state.delete(deleteReserve);
      state = new Set(state);
      localStorage.setItem('reservedList', JSON.stringify(Array.from(state)));
      return state;
    default:
      throw new Error('알 수 없는 액션 타입입니다.');
  }
};

export const ReservedListProvider = ({ children }) => {
  const reserveListInitState = () => {
    const reservedList = JSON.parse(localStorage.getItem('reservedList')) ?? [];
    return new Set(reservedList);
  };

  const [reserveList, dispatch] = useReducer(
    reserveListReducer,
    reserveListInitState()
  );

  const addReserve = newReserve => {
    dispatch({ type: 'ADD', newReserve });
  };
  const deleteReserve = deleteReserve => {
    dispatch({ type: 'DELETE', deleteReserve });
  };

  const value = { reserveList, addReserve, deleteReserve };

  return (
    <ReservedListContext.Provider value={value}>
      {children}
    </ReservedListContext.Provider>
  );
};

export const useReservedListContext = () => useContext(ReservedListContext);
