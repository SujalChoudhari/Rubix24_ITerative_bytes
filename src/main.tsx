import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, Button, Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Routes from './Router.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer.tsx';
import Chatbot from './components/Chatbot.tsx';
import { Fa0 } from 'react-icons/fa6';
import { FaRobot } from 'react-icons/fa';

const ChatbotButton = ({ onClick }) => {
  return (
    <Button
      position="fixed"
      bottom="4"
      right="4"
      onClick={onClick}
      colorScheme="blue"
    >
      <FaRobot />   Help
    </Button>
  );
};

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleChatbotToggle = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes />
        <Footer />
        <ChatbotButton onClick={handleChatbotToggle} />
        {showChatbot && (
          <Box
            position="fixed"
            bottom="60px"
            right="4"
            boxShadow="md"
          >
            <Chatbot />
          </Box>
        )}
      </Router>
    </ChakraProvider>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
