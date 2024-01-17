import React, { useState, useEffect } from 'react';
import { Box, Flex, VStack, Text, Button, List, ListItem, Divider } from '@chakra-ui/react';
import PocketBase from 'pocketbase';
import CompliantEdit from './ComplaintEdit';
import { usePocket } from '../../contexts/PocketContext';

function Complaints() {
    // Sample list of Meet codes
    const [compliants, setCompliants] = useState([])
    const pb = new PocketBase('http://127.0.0.1:8090');

    const { user } = usePocket();

    useEffect(() => {
        // you can also fetch all records at once via getFullList
        const fetchMeetCodes = async () => {
            const records = await pb.collection('complaints').getFullList({
                sort: '-created',
            });
            console.log(records)
            setCompliants(records);
        }

        fetchMeetCodes();
    }, []);

    const [selectedComplaintID, setselectedComplaintID] = useState(null);

    const handleCodeSelection = (code: string) => {
        setselectedComplaintID(code);
    };



    return (
        <Flex h="100%" p={8}>
            <VStack spacing={4} align="left" width="25%">
                <Text fontSize="2xl" fontWeight="bold">Compliants</Text>
                <Divider />
                <List maxH="300px" overflowY="auto">
                    {compliants.map((meet) => (
                        meet.username == user.name &&
                        <ListItem key={meet.id} py="12px">
                            <Button
                                width="100%"
                                variant={selectedComplaintID === meet.id ? 'solid' : 'outline'}
                                colorScheme={meet.status === "Satisfied" ? "teal" : "red"}
                                onClick={() => handleCodeSelection(meet.id)}
                            >
                                {meet.orderId.slice(0, 10)}
                            </Button>
                        </ListItem>
                    ))}
                </List>

            </VStack>

            {/* Right Panel - Support Meeting Card */}
            <Box flex="1" ml={8}>
                {selectedComplaintID ? (
                    <>
                        <CompliantEdit recordId={selectedComplaintID} />
                    </>
                ) : (
                    <Text>Please select a name to review and satisfy the complaint</Text>
                )}
            </Box>
        </Flex>
    );
}

export default Complaints;
