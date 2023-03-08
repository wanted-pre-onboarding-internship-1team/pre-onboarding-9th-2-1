import Mainpage from '../pages/Mainpage';
import ReservationPage from '../pages/ReservationPage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function router() {
  return (
    <Routes>
      <Route path='/*' element={<Navigate to='/main' />} />
      <Route path='/main' element={<Mainpage />} />
      <Route path='/reservations' element={<ReservationPage />} />
    </Routes>
  );
}
