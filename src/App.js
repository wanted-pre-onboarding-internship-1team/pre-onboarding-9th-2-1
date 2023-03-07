import { ReservationContextProvider } from './components/reservation/ReservationContext';
import Router from './router/router';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <ReservationContextProvider>
        <Router />
      </ReservationContextProvider>
    </ChakraProvider>
  );
}

export default App;
