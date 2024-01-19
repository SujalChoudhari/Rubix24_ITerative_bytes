import React, { useEffect, useState } from 'react';
import { Container, Box, chakra, Text, SimpleGrid, Flex, useColorModeValue } from '@chakra-ui/react';
import { RepeatIcon, QuestionIcon } from '@chakra-ui/icons';
import { MdOutlinePersonPin } from 'react-icons/md';







interface IFeature {
  heading: string;
  content: string;
  icon: React.ReactElement;
}

const Slider: IFeature[] = [
  {
    heading: 'Ask Community',
    content: 'Ask questions, post tips, and even answer each other\'s questions through community forums.',
    icon: <MdOutlinePersonPin size={36} />,
  },
  {
    heading: 'Complaint Status',
    content: 'Our user-friendly platform allows you to effortlessly check the status of your submitted complaints.',
    icon: <RepeatIcon w={8} h={8} />,
  },
  {
    heading: 'Help',
    content: 'Effortlessly track the status of your support tickets and receive timely updates. ',
    icon: <QuestionIcon w={10} h={9} />,
  },
];

const Slide = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 300;

      setIsVisible(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }}>
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
        Quick Link
      </chakra.h3>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4}>
        {Slider.map((feature, index) => (
          <Box
            key={index}
            bg={useColorModeValue('gray.100', 'gray.700')}
            p={6}
            rounded="lg"
            textAlign="center"
            style={{
              opacity: isVisible ? 1 : 0.2,
              transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out',
            }}
          >
            <Flex
              p={2}
              w="max-content"
              color="white"
              bgGradient="linear(to-br, #228be6, #15aabf)"
              rounded="md"
              marginInline="auto"
              boxShadow="lg"
            >
              {feature.icon}
            </Flex>
            <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
              {feature.heading}
            </chakra.h3>
            <Text fontSize="md" mt={4}>
              {feature.content}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Slide;
