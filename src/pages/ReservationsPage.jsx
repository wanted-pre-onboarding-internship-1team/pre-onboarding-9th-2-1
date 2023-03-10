import Header from '../components/common/Header';
import ReservationsList from '../components/reservations/ReservationsList';
import { useProductValueContext } from '../contexts/ProductContext';
import { Button, Container, Flex } from '@chakra-ui/react';

export default function ReservationsPage() {
  const productList = useProductValueContext();

  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header noBackBtn={true} />
      <ReservationsList productList={productList} />
      <Flex justifyContent='center' paddingX={4}>
        <Button width='100%'>{`총 ${productList
          .reduce((prev, curr) => prev + curr.currentCount * curr.price, 0)
          .toLocaleString()}원 구매하기`}</Button>
      </Flex>
    </Container>
  );
}
