import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { usePocket } from '../contexts/PocketContext';

import {
    ChakraProvider,
    Box,
    Flex,
    Heading,
    Button,
    Text,
    useColorMode,
    Badge,
    Stack,
} from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

const CommunityPage = () => {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const { user } = usePocket();
    const [complaints, setComplaints] = useState([]);

    // you can also fetch all records at once via getFullList
    const loadCompliants = async () => {
        const records = await pb.collection('complaints').getFullList({
            sort: 'upvotes',
        });
        setComplaints(records);
    }

    useEffect(() => {
        loadCompliants();
    }, [])

    const { colorMode, toggleColorMode } = useColorMode();

    const hasUpvoted = (upvotes) => upvotes.includes(user.id);

    const handleUpvote = async (recordId, upvotes) => {
        if (!hasUpvoted(upvotes)) {
            const updatedComplaints = complaints.map((complaint) =>
                complaint.id === recordId ? { ...complaint, upvotes: [...upvotes, user.id] } : complaint
            );
            setComplaints(updatedComplaints);

            // Get the complaint with the same id
            const complaintToUpdate = updatedComplaints.find((complaint) => complaint.id === recordId);

            // Update the complaint with the new upvotes data
            try {
                await pb.collection('complaints').update(recordId, {
                    upvotes: complaintToUpdate.upvotes, // Make sure 'upvotes' field is correctly named in your data structure
                });
            } catch (error) {
                console.error('Error updating complaint with upvotes:', error);
            }
        }
    };


    return (
        <Flex direction="column" align="center" justify="center" minH="90vh">
            <Heading mb={4}>Community Feed</Heading>
            <Stack spacing={4} maxW="800px">
                {complaints.map((complaint) => (
                    <Box key={complaint.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                        <Flex align="center" justify="space-between">
                            <Box>
                                <Button
                                    colorScheme="teal"
                                    size="sm"
                                    onClick={() => handleUpvote(complaint.id, complaint.upvotes)}
                                    disabled={hasUpvoted(complaint.upvotes)}
                                >
                                    <FaArrowUp />
                                </Button>
                                <Text mt={2} fontSize="sm">
                                    {complaint.upvotes.length}
                                </Text>
                            </Box>
                            <Box>
                                <Text fontWeight="bold">{complaint.username}</Text>
                            </Box>
                        </Flex>
                        <Text mt={2} color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                            {complaint.description}
                        </Text>
                        <Flex align="center" mt={2}>
                            <Badge colorScheme="teal" mr={2}>
                                {complaint.status}
                            </Badge>
                            <Text fontSize="sm">{complaint.created}</Text>

                            <Text fontSize="sm">{complaint.orderId}</Text>
                        </Flex>
                    </Box>
                ))}
            </Stack>
        </Flex>
    );
};
export default CommunityPage;