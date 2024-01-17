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
            h="100vh" 
        >
            <Container maxW="xl">
                <VStack align="center" py={8}>
                    <Heading fontSize="4xl" mb={4} color={useColorModeValue('teal.600', 'teal.300')}>
                        Welcome to Arzi Support
                    </Heading>
                    <Text fontSize="lg" textAlign="center" color={useColorModeValue('gray.600', 'gray.400')}>
                        Connect with our support team through a video call. We're here to assist you. Please stay calm and wait for a support person to join you shortly.
                    </Text>
                    <Text textAlign="left" fontSize="sm" mb={4}>
                        <strong>Instructions:</strong>
                        <br />
                        - Be clear about the issue you're facing.
                        <br />
                        - Have relevant documents ready for reference.
                        <br />
                        - Ensure you are in a quiet and well-lit environment.
                    </Text>
                    <SupportMeetingCard meetingKey={0}/>
                </VStack>
            </Container>
        </Box>
    );
};

export default VideoCall;
