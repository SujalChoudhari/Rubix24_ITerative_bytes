import { Box, Flex, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ContactSupportSection = () => {
  return (
    <Box py={12} bg={useColorModeValue('gray.100', 'gray.800')}>
      <Heading textAlign="center" mb={8} fontSize="3xl" color={useColorModeValue('teal.500', 'teal.200')}>
        Contact or Support
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="center">
        <Box textAlign="center" mx={4} mb={{ base: 8, md: 0 }}>
          <Text fontSize="xl" mb={2} color={useColorModeValue('gray.700', 'gray.300')}>
            Need assistance or have questions?
          </Text>
          <Text mb={4} color={useColorModeValue('gray.600', 'gray.400')}>
            Our support team is ready to help. Contact us through the options below.
          </Text>
          <Link to="videocall">
            <Button colorScheme={useColorModeValue('teal', 'teal')} color="white">
              Contact Support
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default ContactSupportSection;
