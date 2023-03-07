import ProductList from '../components/main/ProductList';
import { ReservedListProvider } from '../contexts/ReservedListContext';
import React from 'react';

const Mainpage = () => {
  return (
    <ReservedListProvider>
      <ProductList />
    </ReservedListProvider>
  );
};

export default Mainpage;
