import Header from '../components/common/Header';
import MainPage from '../pages/MainPage';
import Basket from '../pages/basket/Basket';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/main' />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/reservations' element={<Basket />} />
      </Routes>
    </>
  );
}
