import TravelProductList from '../components/TravelProductList';
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Mainpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <TravelProductList />
      <Button
        onClick={() => {
          navigate('/reservations');
        }}>
        장바구니로 이동
      </Button>
    </>
  );
};

export default Mainpage;
