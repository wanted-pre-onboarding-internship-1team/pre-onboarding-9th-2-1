import MainPage from '../pages/MainPage';
import Reservation from '../pages/Reservation';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/main' />} />
      <Route path='/main' element={<MainPage />} />
      <Route path='/reservations' element={<Reservation />} />
    </Routes>
  );
}
