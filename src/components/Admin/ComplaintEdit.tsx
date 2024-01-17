import React, { useState, useEffect } from 'react';
import { ChakraProvider, useToast, Flex, Heading, Input, Button, ColorModeScript, useColorMode, FormControl, FormHelperText, FormLabel, Box, useBoolean } from '@chakra-ui/react';
import PocketBase from 'pocketbase';
import { Navigate, useNavigate } from 'react-router';
const pb = new PocketBase('http://127.0.0.1:8090');

const CompliantEdit = ({ recordId }) => {
    const [formData, setFormData] = useState({
        username: '',
        description: '',
        status: '',
        address: '',
        orderId: '',
        complaintType: '',
    });

    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate();
    const toast = useToast()
    const [unsavedChanges, setUnsavedChanges] = useState(false)

    useEffect(() => {
        // Fetch data for the specified recordId and update the form data
        const fetchRecordData = async () => {
            try {
                const fetchedRecord = await pb.collection('complaints').getOne(recordId);
                setFormData(fetchedRecord);
            } catch (error) {
                console.error('Error fetching record data:', error);
            }
        };

        fetchRecordData();
    }, [recordId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setUnsavedChanges(false);
    };

    const handleUpdateRecord = async () => {
        try {
            await pb.collection('complaints').update(recordId, formData);
            console.log('Record updated successfully!');

        } catch (error) {
            console.error('Error updating record:', error);
        }

        setUnsavedChanges(true);
    };

    const handleMarkAsSatisfied = async () => {
        try {
            // Update the status or any other field to mark the complaint as satisfied
            await pb.collection('complaints').update(recordId, { status: 'Satisfied' });
            console.log('Complaint marked as satisfied!');
        } catch (error) {
            console.error('Error marking complaint as satisfied:', error);
        }
        navigate(0)
    };

    return (
        <Flex direction="column" align="center" justify="center" minH="70vh">
            <Heading mb={4}>Update Complaint</Heading>
            <ColorModeScript initialColorMode={colorMode} />

            <FormControl mb={3}>
                <Box display={'inline-block'}>
                    <FormLabel>Username</FormLabel>
                    <FormHelperText>Username cannot be changed</FormHelperText>
                </Box>
                <Input readOnly placeholder="Enter username" name="username" value={formData.username} onChange={handleInputChange} />
            </FormControl>

            <FormControl mb={3}>
                <Box display={'inline-block'}>
                    <FormLabel>Description</FormLabel>
                    <FormHelperText>Description cannot be changed</FormHelperText>
                </Box>
                <Input readOnly placeholder="Enter description" name="description" value={formData.description} onChange={handleInputChange} />
            </FormControl>

            <FormControl mb={3}>
                <Box display={'inline-block'}>
                    <FormLabel>Address</FormLabel>
                    <FormHelperText>Address cannot be changed</FormHelperText>
                </Box>
                <Input readOnly placeholder="Enter address" name="address" value={formData.address} onChange={handleInputChange} />
            </FormControl>

            <FormControl mb={3}>
                <Box display={'inline-block'}>
                    <FormLabel>Order ID</FormLabel>
                    <FormHelperText>Provide the order ID</FormHelperText>
                </Box>
                <Input placeholder="Enter order ID" name="orderId" value={formData.orderId} onChange={handleInputChange} />
            </FormControl>

            <FormControl mb={3}>
                <Box display={'inline-block'}>
                    <FormLabel>Complaint Type</FormLabel>
                    <FormHelperText>Specify the type of complaint</FormHelperText>
                </Box>
                <Input placeholder="Enter complaint type" name="complaintType" value={formData.complaintType} onChange={handleInputChange} />
            </FormControl>

            <FormControl mb={3}>
                <Box display={'inline-block'}>
                    <FormLabel>Status</FormLabel>
                    <FormHelperText>Provide the current status</FormHelperText>
                </Box>
                <Input placeholder="Enter status" name="status" value={formData.status} onChange={handleInputChange} />
            </FormControl>
            <Box>
                <Button colorScheme="teal" onClick={() => {
                    handleMarkAsSatisfied(); toast({
                        title: 'Hurray!',
                        description: "One More satisfied Customer!",
                        status: 'success',
                        duration: 2000, // Adjust the duration as needed
                        isClosable: true,
                    });
                }}>
                    Mark as Satisfied
                </Button>
                <Button colorScheme="teal" variant={"ghost"} onClick={() => {
                    handleUpdateRecord(); toast({
                        title: 'Saved Successfully.',
                        description: "We've saved the data",
                        status: 'success',
                        duration: 3000, // Adjust the duration as needed
                        isClosable: true,
                    });
                }}>
                    Update Record
                </Button>
            </Box>
        </Flex>

    );
};

export default CompliantEdit;