import * as React from 'react';
import customTheme from './theme/ProviderTheme';
import Home from './pages/Home/home';
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Home/>
  </ChakraProvider>
  );
}

export default App;
