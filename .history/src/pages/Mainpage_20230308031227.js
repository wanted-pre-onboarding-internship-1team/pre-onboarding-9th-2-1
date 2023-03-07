import DetailProductItem from '../components/main/DetailProductItem';
import TravelProductList from '../components/main/TravelProductList';
import TravelProductContextProvider from '../context/TravelProductContext';
import { Container, Flex, Modal, useDisclosure } from '@chakra-ui/react';
import React, { Suspense } from 'react';

export default function Mainpage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <TravelProductContextProvider>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        wefwaefawef afe wf ew fwaf waef weafwe fewa fewafe wafew fewa fewa fwe
      </Modal>
      <Container
        width='100vw'
        height='100vh'
        overflow='hidden'
        mx='0'
        px='0'
        position='relative'
        maxWidth='100vw'>
        <Flex
          justify='center'
          width='100%'
          height='100%'
          p='1rem'
          overflow='auto'>
          <Suspense fallback={<div>로딩중</div>}>
            <TravelProductList />
          </Suspense>
        </Flex>
      </Container>
      <DetailProductItem />
    </TravelProductContextProvider>
  );
}
