import * as React from 'react';
import customTheme from './theme/ProviderTheme';
import Home from './pages/Home/home';
import { ChakraProvider } from "@chakra-ui/react";
import AllRoutes from './routes/routers';


function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <AllRoutes/>
  </ChakraProvider>
  );
}

export default App;
