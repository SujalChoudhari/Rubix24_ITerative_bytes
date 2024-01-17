import { Box, Heading, Text, Flex, Icon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

const FeaturesSection = () => {
    const features = [
        {
            title: 'Efficient Complaint Tracking',
            description: 'Track and manage complaints seamlessly with Arzi\'s intuitive system.',
        },
        {
            title: 'Quick Resolution',
            description: 'Arzi ensures timely resolution, providing a hassle-free experience for users.',
        },
        {
            title: 'User-Friendly Interface',
            description: 'Navigate Arzi effortlessly with its user-friendly and intuitive interface.',
        },
        {
            title: 'Secure Complaint Management',
            description: 'Your complaints are handled with utmost security and confidentiality.',
        },
    ];

    return (
        <Box py={12} bg="gray.100">
            <Heading textAlign="center" mb={8} fontSize="3xl">
                Key Features
            </Heading>
            <Flex direction="column" alignItems="center">
                {features.map((feature, index) => (
                    <Flex key={index} maxW="600px" width={"70vw"} mb={8} p={4} borderRadius="md" bg="white" boxShadow="md" alignItems="center">
                        <Icon as={FaCheckCircle} color="teal.500" boxSize={6} mr={4} />
                        <Box>
                            <Heading fontSize="xl" mb={2}>
                                {feature.title}
                            </Heading>
                            <Text>{feature.description}</Text>
                        </Box>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
};

export default FeaturesSection;
