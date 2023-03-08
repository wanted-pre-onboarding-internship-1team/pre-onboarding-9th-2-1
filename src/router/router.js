import { ReservedItemProvider } from '../components/reservation/ReservationContext';
import Mainpage from '../pages/main/Mainpage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function router() {
  return (
    <ReservedItemProvider>
      <Routes>
        <Route path='/' element={<Navigate to='/main' />} />
        <Route path='/main' element={<Mainpage />} />
      </Routes>
    </ReservedItemProvider>
  );
}
