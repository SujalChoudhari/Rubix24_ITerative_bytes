import React, { useCallback } from 'react';
import { Box, Center, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const SupportMeetingCard = ({ meetingKey }: { meetingKey: number }) => {
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    // If meetingKey is null or not provided, generate a random one
    let generatedMeetingKey = meetingKey;
    if (meetingKey == 0) {
      generatedMeetingKey == Math.floor(Math.random() * 999999)
    }
    navigate(`/room/${generatedMeetingKey}`);
  }, [navigate, meetingKey]);

  return (
    <Center h="40vh">
      <Box p={6} borderWidth="1px" borderRadius="lg" boxShadow="lg" minWidth={"30vw"} maxW="md" textAlign="center">
        <Button colorScheme="teal" onClick={handleJoinRoom}>
          Start Meeting
        </Button>
      </Box>
    </Center>
  );
};

export default SupportMeetingCard;
