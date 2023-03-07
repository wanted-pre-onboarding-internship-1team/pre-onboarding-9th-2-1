import Router from './router/router';
import { ChakraProvider } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/main');
    }
  }, []);
  return (
    <ChakraProvider>
      <Router />{' '}
    </ChakraProvider>
  );
}

export default App;
