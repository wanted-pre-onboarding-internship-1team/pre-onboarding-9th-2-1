import GoMainButton from '../components/reservations/GoMainButton';
import ProductList from '../components/reservations/ProductList';
import TotalPrice from '../components/reservations/TotalPrice';
import { Container } from '@chakra-ui/react';

export default function Reservations() {
  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <GoMainButton />
      <ProductList />
      <TotalPrice />
    </Container>
  );
}
