import { App } from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { ContextProvider } from './context/MyContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { global } from './styles/global';
import { makeServer } from './services/mirage';

if(process.env.NODE_ENV === 'development') {
  makeServer();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={global}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
