import Router from './router/router';
import reset from './style/reset';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';

function App() {
  return (
    <ChakraProvider>
      <Global styles={reset} />
      <Router />
    </ChakraProvider>
  );
}

export default App;
