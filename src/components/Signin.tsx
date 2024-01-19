/*'use client'


import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Link,
  Heading,
  Text,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import * as rrd from "react-router-dom";


import React, { useRef, useCallback } from "react";

import { usePocket } from "../contexts/PocketContext";
import yourImage from '../assets/loginn.png'; // Replace with the path to your image

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = usePocket();
  const navigate = rrd.useNavigate();

  const handleOnSubmit = useCallback(
    async () => {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    },
    [login]
  );

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      direction={{ base: 'column', md: 'row' }} // Stack vertically on small screens and horizontally on medium and larger screens
    >
    
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} width={{ base: '100%', md: '50%' }}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Box fontSize={'lg'} display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Text color={'gray.600'} >
              to enjoy all of our cool
            </Text>
            <Text color={'#4195D3'} px={2}>features</Text>
            <Text>✌️</Text>
          </Box>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" ref={emailRef} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" ref={passwordRef} />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'#4195D3'}>Forgot password?</Text>
              </Stack>
              <Button
                onClick={handleOnSubmit}
                bg={'#4195D3'}
                color={'white'}
                _hover={{
                  bg: '#4195D3',
                }}>
                Sign in
              </Button>
              <Stack pt={6}>
                <rrd.Link to={"/signup"}>
                  <Text align={'center'}>
                    New user? <Link color={'#4195D3'}>Sign Up</Link>
                  </Text>
                </rrd.Link>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>

      
      <Box ml={{ base: 0, md: 4 }} width={{ base: '100%', md: '50%' }}>
        <Image src={yourImage} alt="Your Image" boxSize="80%" objectFit="cover" />
      </Box>
    </Flex>
  );
}*/import React, { useRef, useCallback, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Button, Link, Heading, Text, useColorModeValue, Image } from '@chakra-ui/react';
import * as rrd from 'react-router-dom';
import yourImage from '../assets/hero2.png';
import { usePocket } from "../contexts/PocketContext";

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = rrd.useNavigate();

  const controls = useAnimation();
  const { login } = usePocket();

  const handleOnSubmit = useCallback(
    async () => {
      // Your login logic here
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    },
    [] // Removed login dependency
  );

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      direction={{ base: 'column', md: 'row' }}
    >
      {/* Left side - Sign-in form */}
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} width={{ base: '100%', md: '50%' }}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Box fontSize={'lg'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Text color={'gray.600'}>
              to enjoy all of our cool
            </Text>
            <Text color={'#4195D3'} px={2}>features</Text>
            <Text>✌️</Text>
          </Box>
        </Stack>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" ref={emailRef} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" ref={passwordRef} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Text color={'#4195D3'}>Forgot password?</Text>
                </Stack>
                <Button
                  onClick={handleOnSubmit}
                  bg={'#4195D3'}
                  color={'white'}
                  _hover={{
                    bg: '#4195D3',
                  }}
                >
                  Sign in
                </Button>
                <Stack pt={6}>
                  <rrd.Link to={'/signup'}>
                    <Text align={'center'}>
                      New user? <Link color={'#4195D3'}>Sign Up</Link>
                    </Text>
                  </rrd.Link>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </motion.div>
      </Stack>

      {/* Right side - Image with reduced margin */}
      <Box ml={{ base: 0, md: 4 }} width={{ base: '100%', md: '50%' }}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={controls}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <Image src={yourImage} alt="Your Image" boxSize="80%" objectFit="cover" />
        </motion.div>
      </Box>
    </Flex>
  );
}
