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
                message: 'Hello! I am Arzi, your Complaint Tracking Assistant. How can I assist you?',
                trigger: '2',
            },
            {
                id: '2',
                options: [
                    { value: 1, label: "Need Help", trigger: 3 },
                    { value: 2, label: "Join Arzi", trigger: 4 },
                    { value: 3, label: "Explore", trigger: 5 },
                ]
            },
            {
                id: '3',
                message: `We are always ready to help you! Open Support page`,
                end: true
            },
            {
                id: '4',
                message: `You can join via Signing In.`,
                end: true
            },
            {
                id: '5',
                message: `Explore the Homepage of the Website for Features`,
                end: true
            },
        ]}
        handleEnd={handleEnd} />;
};

export default Chatbot;
