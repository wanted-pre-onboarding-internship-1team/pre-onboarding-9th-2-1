import Header from '../components/common/Header';
import Filter from '../components/filter/Filter';
import Price from '../components/filter/Price';
import Space from '../components/filter/Space';
import ProductList from './../components/product/ProductList';
import { Container, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function MainPage() {
  const [currentTab, setCurrentTab] = useState('');

  const TABS = [
    {
      id: 1,
      title: '가격순',
      content: <Price />,
    },
    { id: 2, title: '공간순', content: <Space /> },
  ];

  const rightComp = () => (
    <Link to='/reservations'>
      <Icon as={BsCart2} boxSize='6' />
    </Link>
  );

  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header rightComp={rightComp()} />
      <Filter
        TABS={TABS}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <ProductList />
    </Container>
  );
}
