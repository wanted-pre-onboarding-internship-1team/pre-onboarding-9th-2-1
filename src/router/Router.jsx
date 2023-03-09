import MainPage from '../pages/MainPage';
import Reservations from '../pages/Reservations';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function router() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/main' />} />
      <Route path='/main' element={<MainPage />} />
      <Route path='/reservations' element={<Reservations />} />
    </Routes>
  );
}
