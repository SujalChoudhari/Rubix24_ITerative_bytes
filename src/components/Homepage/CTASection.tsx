import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <Box py={"10vh"} bg={'gray.100'} minHeight={"20vh"}>
      <Heading textAlign="center" mb={8} fontSize="3xl">
        Join Us
      </Heading>
      <Flex direction={{ base: 'column', md: 'row' }} alignItems="center" justifyContent="center">
        <Box textAlign="center" mx={4} mb={{ base: 8, md: 0 }}>
          <Text fontSize="xl" mb={2}>
            Ready to get started with Arzi?
          </Text>
          <Text mb={4}>
            Raise your voice against frauds!
          </Text>
          <Link to="/signup">
            <Button colorScheme="teal">
              Sign Up
            </Button>
          </Link>
        </Box>
        {/* Add more CTAs or feature highlights here */}
      </Flex>
    </Box>
  );
};

export default CTASection;
