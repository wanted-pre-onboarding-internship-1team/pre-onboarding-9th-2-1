import Header from '../components/common/Header';
import MainPage from '../pages/MainPage';
import Basket from '../pages/basket/Basket';
import { Icon } from '@chakra-ui/react';
import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function router() {
  const rightComp = () => (
    <Link to='/reservations'>
      <Icon gridArea='unset' as={BsCart2} boxSize='6' />
    </Link>
  );

  return (
    <>
      <Header noBackBtn={true} rightComp={rightComp()} />
      <Routes>
        <Route path='/' element={<Navigate to='/main' />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/reservations' element={<Basket />} />
      </Routes>
    </>
  );
}
