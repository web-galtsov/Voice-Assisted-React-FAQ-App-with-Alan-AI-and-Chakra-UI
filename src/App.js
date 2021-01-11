import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Navbar } from "./Navbar";
import { Faq } from "./Faq";

export const App = () => {
  return (
      <ChakraProvider theme={theme}>
        <Navbar/>
        <Faq/>
      </ChakraProvider>
  )
}