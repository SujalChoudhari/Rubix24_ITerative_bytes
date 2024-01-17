import { Box, Flex, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <Box py={"10vh"} bg={useColorModeValue('gray.100', 'gray.800')} minHeight={"20vh"}>
      <Heading textAlign="center" mb={8} fontSize="3xl" color={useColorModeValue('teal.500', 'teal.200')}>
        Join Us
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="center">
        <Box textAlign="center" mx={4} mb={{ base: 8, md: 0 }}>
          <Text fontSize="xl" mb={2} color={useColorModeValue('gray.700', 'gray.300')}>
            Ready to get started with Arzi?
          </Text>
          <Text mb={4} color={useColorModeValue('gray.600', 'gray.400')}>
            Raise your voice against frauds!
          </Text>
          <Link to="/signup">
            <Button colorScheme={useColorModeValue('teal', 'teal')} color="white">
              Sign Up
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default CTASection;
