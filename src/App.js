import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
