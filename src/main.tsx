import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Routes from './Router.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ChakraProvider>
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </ChakraProvider>
    </React.StrictMode>
  );
}
  <React.StrictMode>
    <ChakraProvider>
    <Router>
          <Nav />
          <Routes />
        </Router>
    </ChakraProvider>
  </React.StrictMode>