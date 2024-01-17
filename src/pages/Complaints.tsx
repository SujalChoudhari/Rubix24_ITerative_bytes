import React, { useState } from 'react';
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  Textarea,
  VStack,
  Image,
} from '@chakra-ui/react';

const Complaints = () => {
  const [formData, setFormData] = useState({
    orderId: '',
    orderOptions: ['Order #1', 'Order #2', 'Order #3'],
    selectedOrder: '',
    address: '',
    image: null,
    imageUrl: '',
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add logic for complaint submission
  };

  const handleOrderChange = (e) => {
    setFormData({ ...formData, selectedOrder: e.target.value });
  };

  const handleAddressChange = (e) => {
    setFormData({ ...formData, address: e.target.value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setFormData({
      ...formData,
      image: file,
      imageUrl: imageUrl,
    });
  };

  return (
    <ChakraProvider>
      <Box p={8}>
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel>Order ID</FormLabel>
            <Select
              placeholder="Select Order"
              value={formData.selectedOrder}
              onChange={handleOrderChange}
            >
              {formData.orderOptions.map((order, index) => (
                <option key={index} value={order}>
                  {order}
                </option>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Address</FormLabel>
            <Textarea
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleAddressChange}
            />
          </FormControl>

          <FormControl>
            <FormLabel>Upload Image</FormLabel>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              mb={4}
              fontSize="md"
            />
            {formData.imageUrl && (
              <Image src={formData.imageUrl} alt="Uploaded Image" />
            )}
          </FormControl>

          <Button colorScheme="teal" onClick={handleSubmit}>
            Submit Complaint
          </Button>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Complaints;
