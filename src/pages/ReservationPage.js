import { Button } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReservationPage = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        navigate('/main');
      }}>
      메인으로 이동
    </Button>
  );
};

export default ReservationPage;
