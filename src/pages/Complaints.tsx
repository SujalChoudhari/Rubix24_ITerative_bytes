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
import PocketBase from 'pocketbase';
import { useNavigate } from 'react-router';
import { usePocket } from '../contexts/PocketContext';
const pb = new PocketBase('http://127.0.0.1:8090');


const Complaints = () => {
  const { user } = usePocket();

  const [formData, setFormData] = useState({
    orderId: '',
    orderOptions: ['Order #1', 'Order #2', 'Order #3'],
    complaintOptions: ['Dilevery Boy', 'Food Quality', 'Wrong Dilevery'],
    selectedOrder: '',
    selectedComplaint: '',
    address: '',
    desc: '',
  });

  const navigate = useNavigate();

  const data = {
    "username": user.name,
    "description": formData.desc,
    "status": "Processing Started",
    "address": formData.address,
    "orderId": formData.selectedOrder,
    "complaintType": formData.selectedComplaint
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    const saveToDB = async () => {
      const record = await pb.collection('complaints').create(data);
    }
    saveToDB()

    setFormData({
      orderId: '',
      orderOptions: ['Order #1', 'Order #2', 'Order #3'],
      complaintOptions: ['Dilevery Boy', 'Food Quality', 'Wrong Dilevery'],
      selectedOrder: '',
      selectedComplaint: '',
      address: '',
      desc: '',
    })
  };

  const handleOrderChange = (e) => {
    setFormData({ ...formData, selectedOrder: e.target.value });
  };

  const handleComplaintChange = (e) => {
    setFormData({ ...formData, selectedComplaint: e.target.value });
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
            <FormLabel>Complaint Type</FormLabel>
            <Select
              placeholder="Select Complaint Type"
              value={formData.selectedComplaint}
              onChange={handleComplaintChange}
            >
              {formData.complaintOptions.map((order, index) => (
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
