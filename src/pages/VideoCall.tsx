import React, { useCallback } from 'react';
import { Box, Heading,Container, Text, VStack, Button } from '@chakra-ui/react';
import SupportMeetingCard from '../components/SupportMeetingCard';

const VideoCall = () => {

    return (
        <Box
            
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Container maxW="xl">
                <VStack align="center" py={8}>
                    <Heading fontSize="4xl" mb={4}>
                        Welcome to Arzi Support
                    </Heading>
                    <Text fontSize="lg" textAlign="center" >
                        Connect with our support team through a video call. We're here to assist you. 
                        Please stay calm and wait for a support person to join you shortly.
                    </Text>
                    <SupportMeetingCard/>
                </VStack>
            </Container>
        </Box>
    );
};

export default VideoCall;
