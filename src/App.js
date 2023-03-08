import { ReservationProvider } from './context/ReservationContext';
import Router from './router/router';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <ReservationProvider>
        <Router />
      </ReservationProvider>
    </ChakraProvider>
  );
}

export default App;
