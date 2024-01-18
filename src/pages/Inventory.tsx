import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Image,
  Stack,
  Avatar,
  useColorModeValue,
  SimpleGrid,
  Button,
  useToast,
} from '@chakra-ui/react';
import { useInView } from 'framer-motion';


const ItemCard = ({ fruit, index }) => {

  const cardRef = useRef(null)
  const isCardnView = useInView(cardRef, { once: true })
  const [count, setCount] = useState(0);
  const toast = useToast();

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      toast({
        title: 'Quantity cannot be less than zero',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      key={index}
      ref={cardRef}
      opacity={isCardnView ? 1 : 0}
      transform={isCardnView ? 'none' : index % 3 == 0 ? 'translateX(-100px)' : index % 3 == 1 ? 'translateY(100px)' : 'translateX(100px)'}
      transition={`all 0.4s ease ${((index % 3) * 0.1) + 0.2}s`}
      maxW={'445px'}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      rounded={'md'}
      p={6}
      overflow={'hidden'}
      h="100%"
    >
      <Box h={'210px'} bg={'gray.100'} mb={5}   >
        <Image
          src={fruit.image}
          height={'100%'}
          width={'100%'}
          alt="Example"
        />
      </Box>
      <Stack direction="row" justifyContent={"space-between"} alignItems="center" mb={2}>
        <Text
          color={'teal.500'}
          textTransform={'uppercase'}
          fontWeight={800}
          fontSize={'lg'}
          letterSpacing={1.1}
          mb={1}
        >
          {fruit.name}
        </Text>

      </Stack>
      
      <Text
        color={'blue.500'}
        textTransform={'uppercase'}
        fontWeight={800}
        fontSize={'sm'}
        mb={3}
        letterSpacing={1.1}
      >
        Prizes : ₹{fruit.prize}
      </Text>

      <Text
        color={'blue.500'}
        textTransform={'uppercase'}
        fontWeight={800}
        fontSize={'sm'}
        mb={3}
        letterSpacing={1.1}
      >
        Calories : {fruit.calories}
      </Text>


      <Stack direction="row" alignItems="center" mt={2} align="center">
        <Button
          colorScheme="blue"
          onClick={() => setCount(count + 1)}
          mt={4}
        >
          Add to Cart
        </Button>
        <Stack direction="row" alignItems="center" mt={4} align="center">
        <Button
          size="sm"
          colorScheme="blue"
          onClick={handleDecrement}
          disabled={count === 0}
        >
          -
        </Button>
        <Text fontSize="lg" fontWeight="bold" mx={2}>
          {count}
        </Text>
        <Button size="sm" colorScheme="blue" onClick={() => setCount(count + 1)}>
          +
        </Button>
        </Stack>
        

      </Stack>
      

    </Box>
  )
}
export default function Inventory() {
  const fruits = [
    {
      name: 'Apple (1 kg)',
      image: 'https://5.imimg.com/data5/YY/EN/MY-8155364/fresh-apple-500x500.jpg',
      prize: 200,
      calories: 52,
    },
    {
      name: 'Banana (Dozens)',
      image: 'https://5.imimg.com/data5/WS/FP/KR/SELLER-13408537/fresh-banana.jpg',
      prize: 80,
      calories: 89,
    },
    {
      name: 'Mango (Dozens)',
      image: 'https://5.imimg.com/data5/GR/MM/MY-24285252/fresh-mangoes-500x500.jpg',
      prize: 500,
      calories: 60,
    },
    {
      name: 'Melon (Pieces)',
      image: 'https://3.imimg.com/data3/VC/DO/MY-5074237/fresh-melon.jpg',
      prize: 100,
      calories: 34,
    },
    {
      name: 'Orange (Dozens)',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/4/RA/RB/UX/149519850/fresh-orange-fruit.jpg',
      prize: 100,
      calories: 47,
    },
    {
      name: 'Peach (1 kg)',
      image: 'https://glycemic-index.net/images/FVRSYndNy8.webp',
      prize: 200,
      calories: 67,
    },
    {
      name: 'Pear (1 kg)',
      image: 'https://3.imimg.com/data3/DY/YK/MY-10840861/fresh-pear-250x250.jpg',
      prize: 200,
      calories: 57,
    },
    {
      name: 'Grapes (1 kg)',
      image: 'https://exploringtheturkishkitchen.com/images/com_joomrecipe/294/cropped-Koruk_Suyu_JR21_06_wm.jpg',
      prize: 170,
      calories: 67,
    }
  ];

  return (
    <Box overflowX={'hidden'}>
      <Center>
        <Heading
          px={{ base: 6, md: 150 }}
          pb={10}
          paddingTop={10}
          fontWeight={'normal'}
          fontSize={{ base: '3xl', sm: '2xl', md: '3xl' }}
          lineHeight={'110%'}
          textAlign="center"
        >
          Arzi Fruit Basket Inventory
        </Heading>
      </Center>
      <Center py={6}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} style={{ minHeight: "60vh" }}>
        {fruits.map((fruit, index) => (
          <ItemCard key={index} fruit={fruit} index={index} />
        ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
}
