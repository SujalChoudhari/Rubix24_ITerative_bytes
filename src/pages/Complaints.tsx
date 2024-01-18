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
  Switch,
  Center,
  Input,
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
    complaintOptions: ['Delivery Boy', 'Food Quality', 'Wrong Delivery'],
    selectedOrder: '',
    selectedComplaint: '',
    address: '',
    desc: '',
    receipt: null, // New field for receipt
    isAnonymous: false,
  });

  const navigate = useNavigate();

  const data = {
    username: formData.isAnonymous ? 'Anonymous' : user.name,
    description: formData.desc,
    status: 'Processing Started',
    address: formData.address,
    orderId: formData.selectedOrder,
    complaintType: formData.selectedComplaint,
    userId: user.id,
    receipt: formData.receipt, // Include receipt in the data object
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    const saveToDB = async () => {
      const record = await pb.collection('complaints').create(data);
    };
    saveToDB();

    setFormData({
      orderId: '',
      orderOptions: ['Order #1', 'Order #2', 'Order #3'],
      complaintOptions: ['Delivery Boy', 'Food Quality', 'Wrong Delivery'],
      selectedOrder: '',
      selectedComplaint: '',
      address: '',
      desc: '',
      receipt: null, // Reset receipt field
      isAnonymous: false,
    });
  };

  const handleOrderChange = (e) => {
    setFormData({ ...formData, selectedOrder: e.target.value });
  };

  const toggleAnonymously = (e) => {
    setFormData({ ...formData, isAnonymous: !formData.isAnonymous })

  }

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
      <Center >
        <Box p={8} width={"60vw"}>
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

            <FormControl>
              <FormLabel>Receipt</FormLabel>
              <Input
                type="file"
                accept="image/*, application/pdf" // Adjust as needed for allowed file types
                onChange={async(e) => {
                  setFormData({ ...formData, receipt: e.target.files[0] });
                  
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor='anonymous'>Submit Anonymously</FormLabel>
              <Switch id='anonymous' onChange={toggleAnonymously} />
            </FormControl>

            <Button colorScheme="teal" onClick={handleSubmit}>
              Submit Complaint
            </Button>
          </VStack>
        </Box>
      </Center>

    </ChakraProvider>
  );
};

export default Complaints;
