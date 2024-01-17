import React, { useCallback, useState } from 'react';
import { Box, Center, Input, Button, Heading, Text, Textarea } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const SupportMeetingCard = () => {
  const [meetingPurpose, setMeetingPurpose] = useState('');

  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    let meetingCode = Math.floor(Math.random() * 10000000)
    navigate(`/room/${meetingCode}`)
  }, [navigate])

  return (
    <Center h="60vh">
      <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="lg" maxW="md" textAlign="center">
        <Text textAlign="left" fontSize="sm" mb={4}>
          <strong>Instructions:</strong>
          <br />
          - Be clear about the issue you're facing.
          <br />
          - Have relevant documents ready for reference.
          <br />
          - Ensure you are in a quiet and well-lit environment.
        </Text>
        <Button colorScheme="teal" onClick={handleJoinRoom}>
          Start Meeting
        </Button>
      </Box>
    </Center>
  );
};

export default SupportMeetingCard;
