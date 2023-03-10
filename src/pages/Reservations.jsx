import Header from '../components/common/Header';
import ProductBlank from '../components/reservations/ProductBlank';
import ProductList from '../components/reservations/ProductList';
import TotalPrice from '../components/reservations/TotalPrice';
import { useProductValueContext } from '../contexts/ProductContext';
import { Container, Icon } from '@chakra-ui/react';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Reservations() {
  const addedList = useProductValueContext();

  const rightComp = () => (
    <Link to='/main'>
      <Icon as={AiFillHome} boxSize='6' />
    </Link>
  );
  return (
    <Container maxW='container.sm' backgroundColor='white'>
      <Header rightComp={rightComp()} />
      {!!addedList.length ? (
        <>
          <TotalPrice />
          <ProductList />
        </>
      ) : (
        <ProductBlank />
      )}
    </Container>
  );
}
