import ProductList from '../components/main/ProductList';
import ProductModal from '../components/modal/ProductModal';
import { ModalProductProvider } from '../contexts/ModalProductContext';
import { ReservedListProvider } from '../contexts/ReservedListContext';
import React from 'react';

const Mainpage = () => {
  return (
    <ReservedListProvider>
      <ModalProductProvider>
        <ProductList />
        <ProductModal />
      </ModalProductProvider>
    </ReservedListProvider>
  );
};

export default Mainpage;