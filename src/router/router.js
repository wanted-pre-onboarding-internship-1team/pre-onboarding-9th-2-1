import Mainpage from '../pages/Mainpage';
import Rootpage from '../pages/Rootpage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Rootpage />} />
      <Route path='/main' element={<Mainpage />} />
    </Routes>
  );
}
