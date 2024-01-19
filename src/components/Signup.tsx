'use client'
// 'use client', import statements, and other imports
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useCallback, useRef, useEffect } from 'react';

import { usePocket } from '../contexts/PocketContext';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import * as rrd from 'react-router-dom';

import yourImage from '../assets/registerrrration.png';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const { register } = usePocket();
  const navigate = rrd.useNavigate();

  const handleOnSubmit = useCallback(
    async (evt) => {
      evt?.preventDefault();
      await register(emailRef.current.value, passwordRef.current.value, nameRef.current.value);
      navigate('/signin');
    },
    [register]
  );

  const controls = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Flex
      as={motion.div}
      animate="visible"
      initial="hidden"
      variants={controls}
      transition={{ type: 'spring', stiffness: 100 }}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      direction={{ base: 'column', md: 'row' }}
    >
      {/* Left side - Sign-up form */}
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} width={{ base: '100%', md: '50%' }}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          as={motion.div}
          animate="visible"
          initial="hidden"
          variants={controls}
          transition={{ type: 'spring', stiffness: 100 }}
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" ref={nameRef} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" ref={emailRef} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} ref={passwordRef} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                onClick={handleOnSubmit}
                loadingText="Submitting"
                size="lg"
                bg={'#4195D3'}
                color={'white'}
                _hover={{
                  bg: '#4195D3',
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <rrd.Link to={'/signin'}>
                <Text align={'center'}>
                  Already a user? <Link color={'#4195D3'}>Sign In</Link>
                </Text>
              </rrd.Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      {/* Right side - Image with reduced margin */}
      <Box
        ml={{ base: 0, md: 4 }}
        width={{ base: '100%', md: '50%' }}
        as={motion.div}
        animate="visible"
        initial="hidden"
        variants={controls}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <Image src={yourImage} alt="Your Image" boxSize="80%" objectFit="cover" />
      </Box>
    </Flex>
  );
};

export default SignUp;
