import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import ColorModeSwitcher from './ColorModeSwitcher';
import { ChakraProvider, theme } from '@chakra-ui/react';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
      <ColorModeSwitcher />
    </ChakraProvider>
  </StrictMode>
);




