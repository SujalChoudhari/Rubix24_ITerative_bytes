/*import { Box, Heading, Text, Flex, Icon, useColorModeValue } from '@chakra-ui/react';
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
        <Box py={12} bg={useColorModeValue('gray.100', 'gray.800')}>
            <Heading textAlign="center" mb={8} fontSize="3xl" color={useColorModeValue('teal.500', 'teal.200')}>
                Key Features
            </Heading>
            <Flex direction="column" alignItems="center">
                {features.map((feature, index) => (
                    <Flex
                        key={index}
                        maxW="600px"
                        width={"70vw"}
                        mb={8}
                        p={4}
                        borderRadius="md"
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={useColorModeValue('md', 'dark-lg')}
                        alignItems="center"
                    >
                        <Icon as={FaCheckCircle} color={useColorModeValue('teal.500', 'teal.200')} boxSize={6} mr={4} />
                        <Box>
                            <Heading fontSize="xl" mb={2} color={useColorModeValue('teal.600', 'teal.300')}>
                                {feature.title}
                            </Heading>
                            <Text color={useColorModeValue('gray.700', 'gray.300')}>{feature.description}</Text>
                        </Box>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
};

export default FeaturesSection;
*/

import { Container, Box, chakra, Text, Icon, SimpleGrid } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { MdOutlinePersonPin, MdPermDeviceInformation, MdOutlineFlashlightOn } from 'react-icons/md';
import { SiMinds } from 'react-icons/si';
import { IconType } from 'react-icons';

interface IFeature {
  heading: string;
  content: string;
  icon: IconType;
}

const features: IFeature[] = [
  {
    heading: 'Efficient Complaint Tracking',
    content:
      'Track and manage complaints seamlessly with Arzi\'s intuitive system.',
    icon: MdOutlineFlashlightOn
  },
  {
    heading: 'Quick Resolution',
    content: `Arzi ensures timely resolution, providing a hassle-free experience for users.`,
    icon: SiMinds
  },
  {
    heading: 'User Friendly - Interface',
    content:
      'Navigate Arzi effortlessly with its user-friendly and intuitive interface.',
        icon: MdPermDeviceInformation
  },
  {
    heading: 'Secure Complaint Management',
    content: `Your complaints are handled with utmost security and confidentiality.`,
    icon: MdOutlinePersonPin
  }
];

const FeaturesSection = () => {
  return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={3} textAlign="center">
        Features
      </chakra.h3>
      <SimpleGrid columns={{ base: 1, md: 2 }} placeItems="center" spacing={16} mt={12} mb={4}>
        {features.map((feature, index) => (
          <Box key={index} textAlign="center">
            <Icon as={feature.icon} w={10} h={10} color="blue.400" />
            <chakra.h3 fontWeight="semibold" fontSize="2xl">
              {feature.heading}
            </chakra.h3>
            <Text fontSize="md">{feature.content}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default FeaturesSection;
