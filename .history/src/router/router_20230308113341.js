import Mainpage from '../pages/Mainpage';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function router() {
  return (
    <Routes>
      <Route path='/' element={<>1</>}>
        <Route path='/main' element={<Mainpage />} />
      </Route>
    </Routes>
  );
}
