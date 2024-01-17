import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ContactSupportSection = () => {
  return (
    <Box py={12} bg="gray.100">
      <Heading textAlign="center" mb={8} fontSize="3xl">
        Contact or Support
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="center">
        <Box textAlign="center" mx={4} mb={{ base: 8, md: 0 }}>
          <Text fontSize="xl" mb={2}>
            Need assistance or have questions?
          </Text>
          <Text mb={4}>
            Our support team is ready to help. Contact us through the options below.
          </Text>
          <Link to="videocall">
            <Button colorScheme="teal">Contact Support</Button>
          </Link>
        </Box>
      </Flex>
    </Box >
  );
};

export default ContactSupportSection;
