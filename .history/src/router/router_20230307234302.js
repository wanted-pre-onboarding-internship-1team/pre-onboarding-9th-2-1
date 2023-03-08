import Mainpage from '../pages/Mainpage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function router() {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Mainpage />} />
      </Route>
    </Routes>
  );
}
