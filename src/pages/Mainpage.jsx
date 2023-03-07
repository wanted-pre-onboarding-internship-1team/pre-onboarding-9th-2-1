import Basket from '../components/main/Basket';
import ProductList from '../components/main/ProductList';
import ProductModal from '../components/modal/ProductModal';
import { ModalProductProvider } from '../contexts/ModalProductContext';
import { ReservedListProvider } from '../contexts/ReservedListContext';
import { Divider, HStack } from '@chakra-ui/react';
import React from 'react';

const Mainpage = () => {
  return (
    <ReservedListProvider>
      <ModalProductProvider>
        <HStack>
          <ProductList />
          <Divider orientation='vertical' />
          <Basket />
        </HStack>
        <ProductModal />
      </ModalProductProvider>
    </ReservedListProvider>
  );
};

export default Mainpage;
