import Header from '../components/common/Header';
import ReservedProductItem from '../components/product/ReservedProductItem';
import { useProductValueContext } from '../contexts/ProductContext';
import {
  Container,
  Icon,
  VStack,
  Divider,
  Text,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import React from 'react';
import { BsReverseListColumnsReverse } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function ReservationPage() {
  const reservedProductList = useProductValueContext();
  const rightComp = () => (
    <Link to='/main'>
      <Icon as={BsReverseListColumnsReverse} boxSize='6' />
    </Link>
  );

  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header noBackBtn={true} rightComp={rightComp()} />
      <VStack
        divider={<Divider borderColor='gray.200' />}
        spacing={4}
        align='stretch'
        p={5}>
        {reservedProductList &&
          reservedProductList.map(product => (
            <ReservedProductItem key={product.idx} product={product} />
          ))}
        <Flex>
          <Text fontSize='sm'>총 상품가격:</Text>
          <Spacer />
          <Text as='b' fontSize='md'>
            {reservedProductList
              .reduce((accumulator, product) => {
                return accumulator + product.price * product.count;
              }, 0)
              .toLocaleString()}
          </Text>
          <Text ms={1} fontSize='sm'>
            원
          </Text>
        </Flex>
      </VStack>
    </Container>
  );
}
