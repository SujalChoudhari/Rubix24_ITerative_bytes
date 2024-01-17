import { useState } from 'react';
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Select,
  Button,
  Textarea,
  VStack,
} from '@chakra-ui/react';

const Complaints = () => {
  const [formData, setFormData] = useState({
    orderId: '',
    orderOptions: ['Order #1', 'Order #2', 'Order #3'],
    selectedOrder: '',
    address: '',
    desc: '',
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleOrderChange = (e) => {
    setFormData({ ...formData, selectedOrder: e.target.value });
  };

  const handleAddressChange = (e) => {
    setFormData({ ...formData, address: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, desc: e.target.value });
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
            <FormLabel>Image</FormLabel>
            <iframe
              src="https://mihirrajeshpanchal-fruit-ripeness.hf.space"
              width="100%"
              height="450"
            ></iframe>

          </FormControl>
          
          <FormControl>
            <FormLabel>Complaint Description</FormLabel>
            <Textarea
              placeholder="Enter your complaint description"
              value={formData.desc}
              onChange={handleDescriptionChange}
            />
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
