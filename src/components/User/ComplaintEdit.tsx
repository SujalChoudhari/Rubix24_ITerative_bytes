import React, { useState, useEffect } from 'react';
import { ChakraProvider, useToast, Flex, Heading, Input, Button, ColorModeScript, useColorMode, FormControl, FormHelperText, FormLabel, Box, useBoolean, Select, Progress, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Textarea, Link } from '@chakra-ui/react';
import PocketBase from 'pocketbase';
import { Navigate, useNavigate } from 'react-router';
import * as rrd from 'react-router-dom'

const pb = new PocketBase('http://127.0.0.1:8090');

const CompliantEdit = ({ recordId }) => {
    const [formData, setFormData] = useState({
        username: '',
        description: '',
        status: '',
        address: '',
        orderId: '',
        complaintType: '',
        receipt:''
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

    const labelStyles = {
        mt: '2',
        ml: '-2.5',
        fontSize: 'sm',
    }

    const recipientEmail = 'mockcourt@sujal.xyz'; // Replace with the actual recipient's email

    const generateMailtoLink = () => {
        const subject = encodeURIComponent('Urgent: Filing a Consumer Court Complaint');
        const body = encodeURIComponent(`
      Dear Ma'am/Sir,

      I trust this message reaches you in good health. I am writing to bring to your attention a matter of concern that requires immediate assistance. My username on your platform is ${formData.username}, and I find myself faced with an issue that demands resolution.
      
      The problem at hand is described as follows: ${formData.description}. Despite my efforts, the current status of the issue remains ${formData.status}. I believe it is crucial to escalate this matter to the Consumer Court to seek a fair and swift resolution.
      
      My address is ${formData.address.trim() ? formData.address : '[REDACTED]'}, and if applicable, the company name associated with this matter is ${formData.orderId}. This complaint falls under the category of ${formData.complaintType}.
      
      I kindly request your prompt attention to this matter and look forward to your assistance in resolving this issue.
      Sincerely,
      ${formData.username}
      

      Attached Receipt: http://127.0.0.1:8090/api/files/complaints/${recordId}/${formData.receipt}
      Generated via Arzi ❤️
      `);
        return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    };

    const mailtoLink = `mailto:?subject=Consumer%20Court%20Complaint&body=Username:%20${formData.username}%0D%0A%0D%0ADescription:%20${formData.description}%0D%0A%0D%0AStatus:%20${formData.status}%0D%0A%0D%0AAddress:%20${formData.address}%0D%0A%0D%0AOrder%20ID:%20${formData.orderId}%0D%0A%0D%0AComplaint%20Type:%20${formData.complaintType}`;

    return (
        <Flex direction="column" align="center" justify="center" minH="70vh">
            <Heading mb={4}>Update Complaint</Heading>
            <ColorModeScript initialColorMode={colorMode} />
            <FormControl mb={3}>
                <FormLabel>Current Progress</FormLabel>
                <Slider aria-label='slider-ex-6' value={formData.progress}  >
                    <SliderMark value={25} {...labelStyles}>
                        25%
                    </SliderMark>
                    <SliderMark value={50} {...labelStyles}>
                        50%
                    </SliderMark>
                    <SliderMark value={75} {...labelStyles}>
                        75%
                    </SliderMark>
                    <SliderMark
                        value={formData.progress}
                        textAlign='center'
                        bg='blue.500'
                        color='white'
                        mt='-10'
                        ml='-5'
                        w='12'
                    >
                        {formData.progress}%
                    </SliderMark>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    {/* <SliderThumb /> */}
                </Slider>
            </FormControl>

            <FormControl mb={3}>
                <Box display={'inline-block'}>
                    <FormLabel>Description</FormLabel>
                    <FormHelperText>Description cannot be changed</FormHelperText>
                </Box>
                <Textarea placeholder="Enter description" name="description" value={formData.description} onChange={handleInputChange} />
            </FormControl>

            <FormControl mb={5} mt={5} color={"blue"}>
                <Box display={'inline-block'}>
                    <Button colorScheme='blue' variant={"ghost"}>
                        <rrd.Link to={`http://127.0.0.1:8090/api/files/complaints/${recordId}/${formData.receipt}`}>
                            <Link>Download Receipt</Link>
                        </rrd.Link>
                    </Button>
                </Box>

            </FormControl>

            <FormControl mb={3}>
                <Box display={'inline-block'}>
                    <FormLabel>Address</FormLabel>
                    <FormHelperText>Update address to current address </FormHelperText>
                </Box>
                <Input readOnly placeholder="Enter address" name="address" value={formData.address} onChange={handleInputChange} />
            </FormControl>

            <FormControl mb={3}>
                <Box display={'inline-block'}>
                    <FormLabel>Company</FormLabel>
                    <FormHelperText>Update the company</FormHelperText>
                </Box>
                <Select name="orderId" placeholder={formData.orderId} value={formData.orderId} onChange={handleInputChange}>
                    <option value={'Grofers'}> Grofers </option>
                    <option value={'BigBasket'}> BigBasket </option>
                    <option value={'FlipkartFresh'}> Flipkart Fresh </option>
                    <option value={'Other'}> Other </option>
                </Select>
                {/* <Input placeholder="Enter order ID" name="orderId" value={formData.orderId} onChange={handleInputChange} /> */}
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
                <Input readOnly placeholder="Enter status" name="status" value={formData.status} onChange={handleInputChange} />
            </FormControl>
            <Box>
                <Button colorScheme="red" onClick={() => {
                    handleMarkAsSatisfied(); toast({
                        title: 'Phew!',
                        description: "Reverted Just in time",
                        status: 'success',
                        duration: 2000, // Adjust the duration as needed
                        isClosable: true,
                    });
                }}>
                    Revert
                </Button>
                <Button colorScheme="teal" mr={4} ml={4} variant={"outline"} onClick={() => {
                    handleUpdateRecord(); toast({
                        title: 'Saved Successfully.',
                        description: "We've saved the data",
                        status: 'success',
                        duration: 3000, // Adjust the duration as needed
                        isClosable: true,
                    });
                }}>
                    Update Complaint
                </Button>
                <Button colorScheme={"red"} variant={"ghost"} onClick={() => { window.open(generateMailtoLink(), '_blank'); }}>
                    Not Satisfied
                </Button>
            </Box>
        </Flex>
    );
};

export default CompliantEdit;
