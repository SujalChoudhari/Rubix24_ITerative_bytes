import React from 'react';
import { Box, Heading, Container, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import SupportMeetingCard from '../components/SupportMeetingCard';

const VideoCall = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bg={useColorModeValue('gray.100', 'gray.800')}
            h="100vh" // Set the height to full viewport height
        >
            <Container maxW="xl">
                <VStack align="center" py={8}>
                    <Heading fontSize="4xl" mb={4} color={useColorModeValue('teal.600', 'teal.300')}>
                        Welcome to Arzi Support
                    </Heading>
                    <Text fontSize="lg" textAlign="center" color={useColorModeValue('gray.600', 'gray.400')}>
                        Connect with our support team through a video call. We're here to assist you. Please stay calm and wait for a support person to join you shortly.
                    </Text>
                    <SupportMeetingCard />
                </VStack>
            </Container>
        </Box>
    );
};

export default VideoCall;
