import React, { useState } from 'react';
import { Box, Flex, VStack, Text, Button, List, ListItem, Divider } from '@chakra-ui/react';
import SupportMeetingCard from '../SupportMeetingCard';

function AdminPanel() {
    // Sample list of Meet codes
    const meetCodes = ['8340823', '42423424', '4243234',]; // populate with apis

    const [selectedCode, setSelectedCode] = useState(null);

    const handleCodeSelection = (code: string) => {
        setSelectedCode(code);
    };

    return (
        <Flex h="100%" p={8}>
            <VStack spacing={4} align="left" width="25%">
                <Text fontSize="2xl" fontWeight="bold">Ongoing Meet Codes</Text>
                <Divider />
                <List maxH="80vh" overflowY="auto">
                    {meetCodes.map((code) => (
                        <ListItem key={code} py={"12px"}>
                            <Button
                                width="90%"
                                variant={selectedCode === code ? 'solid' : 'outline'}
                                colorScheme="teal"
                                onClick={() => handleCodeSelection(code)}
                            >
                                {code}
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
