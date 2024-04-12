import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/header';
import Main from './pages/main/main';

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Main/>
  </ChakraProvider>
  );
}

export default App;
