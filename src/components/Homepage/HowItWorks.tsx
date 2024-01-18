/*import React from 'react';
import { Flex, Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
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
        <Box py={12} px={4} bg={useColorModeValue('teal.500', 'teal.800')} color={useColorModeValue('white', 'gray.200')}>
            <Heading textAlign="center" mb={8} fontSize="3xl">
                How It Works
            </Heading>
            <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="center">
                {steps.map((step, index) => (
                    <Box
                        key={index}
                        textAlign="center"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        mx={4}
                        mb={{ base: 8, md: 0 }}
                    >
                        <Box fontSize="2xl" alignSelf="center" color={useColorModeValue('white.500', 'gray.500')} mb={2}>
                            {step.icon}
                        </Box>
                        <Heading fontSize="xl" mb={2} color={useColorModeValue('white', 'gray.300')}>
                            {step.title}
                        </Heading>
                        <Text color={useColorModeValue('white.700', 'gray.400')}>{step.description}</Text>
                    </Box>
                ))}
            </Flex>
        </Box>
    );
};

export default HowItWorks;
*/
import React, { SVGProps } from 'react';
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

interface IFeature {
  heading: string;
  content: string;
  icon: React.ReactElement;
}

const HowItWorks: IFeature[] = [
  {
    heading: 'Create an Account',
    content: 'Get started by creating your Arzi account. Provide basic information to set up your profile.',
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        ></path>
      </svg>
    ),
  },
  {
    heading: 'Submit A Complaint',
    content: 'Once registered, submit a complaint using the easy-to-use interface. Include details and attachments as needed',
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        ></path>
      </svg>
    ),
  },
  {
    heading: 'Track & Resolve',
    content: 'rack the status of your complaint in real-time. Arzi ensures quick resolution and keeps you informed..',
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    ),
  },
];

const HowItWorksComponent = () => {
  return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
        How it Works
      </chakra.h3>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4}>
        {HowItWorks.map((feature, index) => (
          <Box
            key={index}
            bg={useColorModeValue('gray.100', 'gray.700')}
            p={6}
            rounded="lg"
            textAlign="center"
            position="relative"
          >
            <Flex
              p={2}
              w="max-content"
              color="white"
              bgGradient="linear(to-br, #228be6, #15aabf)"
              rounded="md"
              marginInline="auto"
              position="absolute"
              left={0}
              right={0}
              top="-1.5rem"
              boxShadow="lg"
            >
              {feature.icon}
            </Flex>
            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
              {feature.heading}
            </chakra.h3>
            <Text fontSize="md" mt={4}>
              {feature.content}
            </Text>
            
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default HowItWorksComponent;
