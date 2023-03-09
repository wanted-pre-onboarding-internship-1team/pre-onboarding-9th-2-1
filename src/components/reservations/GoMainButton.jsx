import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const GoMainButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => {
        navigate('/main');
      }}>
      메인화면으로
    </Button>
  );
};

export default GoMainButton;
