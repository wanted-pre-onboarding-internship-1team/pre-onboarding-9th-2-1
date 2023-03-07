import App from './App';
import './index.css';
import { ChakraBaseProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraBaseProvider>
      <App />
    </ChakraBaseProvider>
  </BrowserRouter>
);
