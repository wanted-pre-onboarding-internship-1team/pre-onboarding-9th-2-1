import Header from '../components/common/Header';
import ReservationsList from '../components/reservations/ReservationsList';
import { useProductValueContext } from '../contexts/ProductContext';
import useReservations from '../hooks/useReservations';
import { Button, Container, Flex } from '@chakra-ui/react';

export default function ReservationsPage() {
  const {
    calcedProductList: productList,
    totalPrice,
    increaseProduct,
    decreaseProduct,
    deleteProduct,
  } = useReservations();
  console.log(totalPrice);
  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header noBackBtn={true} />
      <ReservationsList
        productList={productList}
        increaseProduct={increaseProduct}
        decreaseProduct={decreaseProduct}
        deleteProduct={deleteProduct}
      />
      <Flex justifyContent='center' paddingX={4}>
        <Button width='100%'>{`총 ${totalPrice.toLocaleString()}원 구매하기`}</Button>
      </Flex>
    </Container>
  );
}
