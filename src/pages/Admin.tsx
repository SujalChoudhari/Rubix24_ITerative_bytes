import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { Box, Flex, Spacer, VStack, Text, Container, IconButton, useColorMode, useColorModeValue, Button, Icon } from '@chakra-ui/react';
import { FaSun, FaMoon, FaComments, FaChartBar, FaExclamationCircle, FaCog, FaBiking, FaIceCream, FaAngry, FaQuestion } from 'react-icons/fa';
import SupportChatRoom from '../components/Admin/SupportChatRoom';
import Complaints from '../components/Admin/Complaints';
import Settings from '../components/Admin/Settings';
import Statistics from '../components/Admin/Statistics';
import { usePocket } from '../contexts/PocketContext';
const Admin = ({ company }: { company: string }) => {
    const { user } = usePocket();
    const [selectedPanel, setselectedPanel] = useState(<SupportChatRoom />)

    const sidebar = [
        {
            icon: <FaComments />,
            title: "Support Chat Room",
            identifier: <SupportChatRoom company={company} />
        }, {
            icon: <FaBiking />,
            title: "Delivery Boy",
            identifier: <Complaints name='Delivery Boy' company={company} />
        }, {
            icon: <FaIceCream />,
            title: "Food Quality",
            identifier: <Complaints name='Food Quality' company={company} />
        }, {
            icon: <FaAngry />,
            title: "Wrong Delivery",
            identifier: <Complaints name='Wrong Delivery' company={company} />
        },{
            icon: <FaQuestion />,
            title: "Other",
            identifier: <Complaints name='Other' company={company} />
        }, {
            icon: <FaChartBar />,
            title: "Statistics",
            identifier: <Statistics company={company} />
        },
        {
            icon: <FaCog />,
            title: "Settings",
            identifier: <Settings company={company} />
        },
    ]


    return (
        <>
            <Flex h="100vh">
                {/* Sidebar */}
                <Box w="250px" bg={useColorModeValue('teal.500', 'teal.800')} p={4} color="white">
                    <VStack spacing={4} align="left">
                        <Text fontSize="2xl">Admin ({company})</Text>

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
