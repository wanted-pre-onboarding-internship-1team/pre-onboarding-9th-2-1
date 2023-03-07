import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Mainpage from '../pages/Mainpage';

export default function router() {
  return (
    <Routes>
      <Route path='/' element={<Mainpage />} />
    </Routes>
  );
}
