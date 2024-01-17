// import React from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import { FaUser, FaEdit, FaCheck } from 'react-icons/fa'; // Import suitable icons

const HowItWorks = () => {
    const steps = [
        {
            icon: <FaUser />,
            title: 'Create an Account',
            description: 'Get started by creating your Arzi account. Provide basic information to set up your profile.',
        },
        {
            icon: <FaEdit />,
            title: 'Submit a Complaint',
            description: 'Once registered, submit a complaint using the easy-to-use interface. Include details and attachments as needed.',
        },
        {
            icon: <FaCheck />,
            title: 'Track and Resolve',
            description: 'Track the status of your complaint in real-time. Arzi ensures quick resolution and keeps you informed.',
        },
    ];

    return (
        <Box py={12} px={4} bg="teal.500" color={"white"}>
            <Heading textAlign="center" mb={8} fontSize="3xl">
                How It Works
            </Heading>
            <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="center">
                {steps.map((step, index) => (
                    <Box key={index} textAlign="center" display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} mx={4} mb={{ base: 8, md: 0 }}>
                        <Box fontSize="2xl" alignSelf={"center"} color="white.500" mb={2} >
                            {step.icon}
                        </Box>
                        <Heading fontSize="xl" mb={2}>
                            {step.title}
                        </Heading>
                        <Text>{step.description}</Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default HowItWorks;
