import TravelProduct from '../components/TravelProduct';
import { useReservationContext } from '../context/ReservationContext';
import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReservationPage = () => {
  const navigate = useNavigate();
  const { products } = useReservationContext();

  return (
    <Box>
      <Button
        onClick={() => {
          navigate('/main');
        }}>
        메인으로 이동
      </Button>
      {products.map((product, index) => {
        return <TravelProduct key={index} data={product} />;
      })}
    </Box>
  );
};

export default ReservationPage;
