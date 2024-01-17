import React, { useState, useEffect } from 'react';
import { Box, Flex, VStack, Text, Button, List, ListItem, Divider } from '@chakra-ui/react';
import SupportMeetingCard from '../SupportMeetingCard';
import PocketBase from 'pocketbase';

function AdminPanel() {
    // Sample list of Meet codes
    const [meetCodes, setMeetCodes] = useState([])
    const pb = new PocketBase('http://127.0.0.1:8090');


    useEffect(() => {
        // you can also fetch all records at once via getFullList
        const fetchMeetCodes = async () => {
            const records = await pb.collection('meet_collection').getFullList({
                sort: '-created',
            });
            setMeetCodes(records);
        }

        fetchMeetCodes();
    }, []);

    const [selectedCode, setSelectedCode] = useState(null);

    const handleCodeSelection = (code: string) => {
        setSelectedCode(code);
    };

    return (
        <Flex h="100%" p={8}>
            <VStack spacing={4} align="left" width="25%">
                <Text fontSize="2xl" fontWeight="bold">Ongoing Meet Codes</Text>
                <Divider />
                <List maxH="300px" overflowY="auto">
                    {meetCodes.map((meet) => (
                        <ListItem key={meet.code} py="12px">
                            <Button
                                width="100%"
                                variant={selectedCode === meet.code ? 'solid' : 'outline'}
                                colorScheme="teal"
                                onClick={() => handleCodeSelection(meet.code)}
                            >
                                {meet.code}
                            </Button>
                        </ListItem>
                    ))}
                </List>

            </VStack>

            {/* Right Panel - Support Meeting Card */}
            <Box flex="1" ml={8}>
                {selectedCode ? (
                    <>

                        <SupportMeetingCard meetingKey={selectedCode} />
                    </>
                ) : (
                    <Text>Please select a Meet code from the list on the left.</Text>
                )}
            </Box>
        </Flex>
    );
}

export default AdminPanel;
