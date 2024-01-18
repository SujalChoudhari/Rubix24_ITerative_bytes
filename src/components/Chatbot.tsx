import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { Route, useNavigate } from 'react-router-dom';

const Chatbot = () => {
    const [userName, setUserName] = useState('');
    const [selectedRoute, setSelectedRoute] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedRoute !== null) {
            handleRoute(selectedRoute);
            setSelectedRoute(null);
        }
    }, [selectedRoute]);

    const handleEnd = ({ values }) => {
        setUserName(values[1]);
    };

    const handleRoute = (value) => {
        switch (value) {
            case '1':
                navigate('/track');
                break;
            case '2':
                navigate('/complaints');
                break;
            case '3':
                navigate('/community');
                break;
            case '4':
                navigate('/videoCall');
                break;
            default:
                break;
        }
    };

    return <ChatBot headerTitle="Arzi Chatbot"
        // speechSynthesis={{ enable: true, lang: 'en' }}
        recognitionEnable={true}
        steps={[
            {
                id: '1',
                message: 'Hello! I am Arzi, your Complaint Tracking Assistant. What is your name?',
                trigger: '2',
            },
            {
                id: '2',
                user: true,
                trigger: '3',
            },
            {
                id: '3',
                message: `Hi {previousValue}! Welcome to Arzi. How can I assist you today?`,
                end: true
            },
        ]}
        handleEnd={handleEnd} />;
};

export default Chatbot;
