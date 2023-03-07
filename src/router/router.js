import Mainpage from '../pages/main/Mainpage';
import Reservations from '../pages/reservations/Reservations';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/main' />} />
      <Route path='/main' element={<Mainpage />} />
      <Route path='/reservations' element={<Reservations />} />
    </Routes>
  );
}
