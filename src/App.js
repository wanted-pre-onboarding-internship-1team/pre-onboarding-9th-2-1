import Router from './router/Router';
import { radioTheme } from './style/customTheme';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: { Radio: radioTheme },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
