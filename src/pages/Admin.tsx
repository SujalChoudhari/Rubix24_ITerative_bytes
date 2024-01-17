import React, { useState } from 'react';
import { Box, Flex, Spacer, VStack, Text, Container, IconButton, useColorMode, useColorModeValue, Button, Icon } from '@chakra-ui/react';
import { FaSun, FaMoon, FaComments, FaChartBar, FaExclamationCircle, FaCog } from 'react-icons/fa';
import SupportChatRoom from '../components/Admin/SupportChatRoom';
import Complaints from '../components/Admin/Complaints';
import Settings from '../components/Admin/Settings';
import Statistics from '../components/Admin/Statistics';

const Admin = () => {

    const [selectedPanel, setselectedPanel] = useState(<SupportChatRoom />)

    const sidebar = [
        {
            icon: <FaComments />,
            title: "Support Chat Room",
            identifier: <SupportChatRoom />
        }, {
            icon: <FaExclamationCircle />,
            title: "Complaints",
            identifier: <Complaints />
        }, {
            icon: <FaChartBar />,
            title: "Statistics",
            identifier: <Statistics />
        },
        {
            icon: <FaCog />,
            title: "Settings",
            identifier: <Settings />
        },
    ]

    return (
        <>
            <Flex h="100vh">
                {/* Sidebar */}
                <Box w="250px" bg={useColorModeValue('teal.500', 'teal.800')} p={4} color="white">
                    <VStack spacing={4} align="left">
                        <Text fontSize="2xl">Admin Dashboard</Text>

                        {sidebar.map((button) => (
                            <Box key={button.title} width="100%">
                                <Button
                                    aria-label={button.title}
                                    width="100%"
                                    justifyContent="flex-start"
                                    onClick={() => { setselectedPanel(button.identifier) }}
                                >
                                    <Flex align="center">
                                        <Box p={2}>{button.icon}</Box>
                                        <Text>{button.title}</Text>
                                    </Flex>
                                </Button>
                            </Box>
                        ))}
                    </VStack>
                </Box>

                {/* Main Content Area */}
                <Box flex="1" p={8} bg={useColorModeValue('gray.100', 'gray.800')}>
                    {selectedPanel}
                </Box>
            </Flex>
        </>
    );
};

export default Admin;