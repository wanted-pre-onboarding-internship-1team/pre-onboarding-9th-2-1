import { FilterProductProvider } from './contexts/FilterProductContext';
import { ProductProvider } from './contexts/ProductContext';
import Router from './router/Router';
import { radioTheme } from './style/customTheme';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  components: { Radio: radioTheme },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <FilterProductProvider>
        <ProductProvider>
          <Router />
        </ProductProvider>
      </FilterProductProvider>
    </ChakraProvider>
  );
}

export default App;
