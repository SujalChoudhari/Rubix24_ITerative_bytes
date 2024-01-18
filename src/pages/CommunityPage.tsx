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
    Accordion,
    AccordionItem,
    AccordionIcon,
    AccordionButton,
    AccordionPanel,
    Textarea,
} from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';

const CommunityPage = () => {
    const pb = new PocketBase('http://127.0.0.1:8090');
    const { user } = usePocket();
    const [complaints, setComplaints] = useState([]);
    const [newComment, setNewComment] = useState('');


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

    const handleAddComment = async (complaint) => {
        let newsgs = complaint.messages
        if (newsgs) {
            newsgs.push({ "user": user.name, "message": newComment })
        }
        else {
            newsgs = [{ "user": user.name, "message": newComment }]
        }
        const record = await pb.collection('complaints').update(complaint.id, { ...complaint, messages: newsgs });
        console.log(record)
        setComplaints(complaints)
    };


    return (
        <Flex direction="column" align="center" justify="center" minH="90vh">
            <Heading mb={4}>Community Feed</Heading>
            <Stack maxW="800px">
                <Accordion allowToggle >
                    {complaints.map((complaint) => (
                        <AccordionItem>
                            <AccordionButton>
                                <Box flex='1' as="span" key={complaint.id} borderWidth="1px" mt={4} borderRadius="lg" overflow="hidden" p={4}>
                                    <Flex justify="space-between">
                                        <Box>
                                            <Button
                                                colorScheme="teal"
                                                size="sm"
                                                onClick={() => handleUpvote(complaint.id, complaint.upvotes)}
                                                disabled={hasUpvoted(complaint.upvotes)}
                                            >
                                                <FaArrowUp />
                                                <Text ml={3} fontSize="sm">
                                                    {complaint.upvotes.length}
                                                </Text>
                                            </Button>
                                        </Box>
                                        <Box>
                                            <Text fontWeight="bold">{complaint.username}</Text>
                                        </Box>
                                    </Flex>
                                    <Text my={6} ml={10} mr={10} textAlign={"left"} color={colorMode === 'light' ? 'gray.600' : 'gray.300'}>
                                        {complaint.description}
                                    </Text>
                                    <Flex align="center" mt={2}>
                                        <Badge colorScheme="teal" mr={2}>
                                            {complaint.status}
                                        </Badge>
                                        <Text fontSize="sm" mr={2}>{complaint.created}</Text>
                                        <Badge colorScheme="teal" mr={2}>
                                            {complaint.complaintType} @ {complaint.orderId}
                                        </Badge>
                                    </Flex>
                                </Box>

                            </AccordionButton>
                            <AccordionPanel pb={4}>
                                <Box>
                                    <Textarea
                                        placeholder="Add a comment..."
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        size="sm"
                                    />
                                    <Button colorScheme="teal" size="sm" mt={2} mb={2} disabled={newComment.trim()} onClick={() => { handleAddComment(complaint) }}>
                                        Post Comment
                                    </Button>
                                </Box>

                                {/* Show Comments */}
                                <Box borderRadius={"lg"} boxShadow={"30px"} borderWidth="1px" p={2}>
                                    {complaint.messages && complaint.messages.map((msg) => (
                                        <Box
                                            key={Math.round()}
                                            p={2}
                                            marginBottom={"16px"}
                                            marginTop={"16px"}
                                            borderWidth="1px"
                                            borderRadius="lg"
                                            bg={colorMode === 'light' ? 'white' : 'gray.700'}
                                        >
                                            <Text fontWeight={700}>{msg.user}</Text>
                                            <Text>{msg.message}</Text>
                                        </Box>
                                    ))}
                                </Box>
                            </AccordionPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </Stack>
        </Flex>
    );
};
export default CommunityPage;