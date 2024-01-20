import React from 'react';
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Box,
  Link,
  Image,
  Skeleton,
  Show,
} from '@chakra-ui/react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Localization } from '../LocalizationProvider';

const HeroSection = () => {
  const transition = {
    duration: 0.5,
    ease: 'easeInOut',
  };

  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={24}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center" maxW="480px">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={transition}

          >
            {/*}
            <Typist startDelay={500} cursor={{ show: false }}>
             
            </Typist>*/}
            <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left">
              Consumer Complaints<br />

            </chakra.h1>
            <TypeAnimation
              sequence={[

                // Same substring at the start will only be typed out once, initially
                ' Made Easy & Simple',
                5000, // wait 1s before replacing "Mice" with "Hamsters"
                ' Made More Efficient',
                3000,
                ' Have Community',
                3000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
              cursor={false}
            />
            <Text
              fontSize="1.2rem"
              textAlign="left"
              lineHeight="1.375"
              fontWeight="400"
              color="gray.500"
              mt={4}
            >
              <Localization>
                One ~ Two ~ Three
              </Localization>
            </Text>
            <HStack
              spacing={{ base: 10, sm: 2 }}
              mb={6} // Adjust the value to set the desired space
              mt={6}
              flexWrap="wrap"
            >

              <Link href='/signup'>
                <chakra.button
                  w={{ base: '100%', sm: 'auto' }}
                  h={12}
                  px={8}
                  color="white"
                  rounded="md"
                  mb={{ base: 2, sm: 0 }}
                  zIndex={5}
                  lineHeight={1}
                  bgGradient="linear(to-l, #0ea5e9,#2563eb)"
                  _hover={{ bgGradient: 'linear(to-l, #0ea5e9,#2563eb)', opacity: 0.9 }}
                >
                  <chakra.span>  Get Started </chakra.span>
                </chakra.button>
              </Link>
              {/* Learn More box without modification */}
              <Box

                justifyContent="center"
                bg={useColorModeValue('white', 'gray.800')}
                w={{ base: '100%', sm: 'auto' }}
                border="1px solid"
                borderColor="gray.300"
                p={3}
                lineHeight={1.18}
                rounded="md"
                boxShadow="md"
                as={Link}
                zIndex={55555555}
              >
                Learn  More
              </Box>
            </HStack>
          </motion.div>
        </Stack>
        {/* Dotted element without modification */}
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />

          <motion.div
            initial={{ opacity: 0, y: -50 }}

            exit={{ opacity: 0, y: 50 }}
            transition={transition}
            animate={{ opacity: 1, y: 0, transition: { ...transition, delay: 0.3 } }}
          >
            <Image
              w="100%"
              maxH="500px"  // Set the maximum height as needed
              minW={{ base: 'auto', md: '30rem' }}
              objectFit="cover"
              src={`https://img.freepik.com/free-vector/customer-help-support-service-background-vector-doodle-illustration-call-center-hotline-with-girl-operator-headset-laptop-message-with-question-lifebuoy-gears_107791-11023.jpg?w=1380&t=st=1705579695~exp=1705580295~hmac=ee1793edc4682106693e94503159a8ddd35eedce3562fee00be15d998b373ef2`}
              rounded="md"
              fallback={<Skeleton />}
            />


          </motion.div>
        </Box>
      </Stack>
    </Container>
  );
};

function DottedBox() {
  return (
    <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
  );
}

export default HeroSection;
