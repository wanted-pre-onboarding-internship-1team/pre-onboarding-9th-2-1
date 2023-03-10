import Header from '../components/common/Header';
import ProductList from '../components/reservations/ProductList';
import TotalPrice from '../components/reservations/TotalPrice';
import { Container, Icon } from '@chakra-ui/react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Reservations() {
  const rightComp = () => (
    <Link to='/main'>
      <Icon as={AiFillHome} boxSize='6' />
    </Link>
  );
  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header rightComp={rightComp()} />
      <ProductList />
      <TotalPrice />
    </Container>
  );
}
