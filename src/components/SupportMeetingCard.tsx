import React, { useCallback } from 'react';
import { Box, Center, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import PocketBase from 'pocketbase';


const SupportMeetingCard = ({ meetingKey }: { meetingKey: number }) => {
  const navigate = useNavigate();
  const pb = new PocketBase('http://127.0.0.1:8090');

  const handleJoinRoom = useCallback(async () => {
    try {
      // If meetingKey is not provided or is 0, generate a random one
      let generatedMeetingKey = meetingKey;
      if (!generatedMeetingKey || generatedMeetingKey === 0) {
        generatedMeetingKey = Math.floor(Math.random() * 999999);
      }

      const resultList = await pb.collection('meet_collection').getFullList();

      const result = resultList.find(item => item.code === generatedMeetingKey);
      if (!result) {
        const record = await pb.collection('meet_collection').create({ "code": "" + generatedMeetingKey });
      }
      else {
        const deleteFromDatabase = async () => {

          await pb.collection('meet_collection').delete(result.id);
        }
        deleteFromDatabase()
      }

      // Navigate to the meeting room
      navigate(`/room/${generatedMeetingKey}`);
    } catch (error) {
      console.error('Error handling join room:', error);
      // Handle error as needed
    }
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
