import Header from '../components/common/Header';
import { useProductValueContext } from '../contexts/ProductContext';
import { Container } from '@chakra-ui/react';

export default function ReservationsPage() {
  const data = useProductValueContext();
  console.log(data);
  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header noBackBtn={true} />
    </Container>
  );
}
