import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box bg="teal.500" p={4} color="white">
            <Flex justifyContent="center" alignItems="center">
                <Text fontSize="md">© 2024 Arzi. All rights reserved.</Text>
            </Flex>
        </Box>
    );
};

export default Footer;
