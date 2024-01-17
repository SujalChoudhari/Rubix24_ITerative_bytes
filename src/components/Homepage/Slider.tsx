// import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
    return (
        <Box position="relative" overflow="hidden">
            <Carousel showThumbs={false} infiniteLoop autoPlay>
                <div style={{ position: 'relative', height: '500px' }}>
                    <img src="./slides/slide1.jpg" alt="Slide 1" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(30%)' }} />
                    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center" color="white">
                        <Heading fontSize="2xl" mb={2}>
                            Efficient Complaint Tracking
                        </Heading>
                        <Text mt={2}>
                            Track and manage complaints seamlessly with Arzi's intuitive system.
                        </Text>
                    </Box>
                </div>
                <div style={{ position: 'relative', height: '500px' }}>
                    <img src="./slides/slide2.jpg" alt="Slide 2" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(30%)' }} />
                    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center" color="white">
                        <Heading fontSize="2xl" mb={2}>
                            Quick Resolution
                        </Heading>
                        <Text mt={2}>
                            Arzi ensures timely resolution, providing a hassle-free experience for users.
                        </Text>
                    </Box>
                </div>
                <div style={{ position: 'relative', height: '500px' }}>
                    <img src="./slides/slide3.jpg" alt="Slide 3" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(30%)' }} />
                    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center" color="white">
                        <Heading fontSize="2xl" mb={2}>
                            User-Friendly Interface
                        </Heading>
                        <Text mt={2}>
                            Navigate Arzi effortlessly with its user-friendly and intuitive interface.
                        </Text>
                    </Box>
                </div>
                <div style={{ position: 'relative', height: '500px' }}>
                    <img src="./slides/slide4.jpg" alt="Slide 4" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(30%)' }} />
                    <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textAlign="center" color="white">
                        <Heading fontSize="2xl" mb={2}>
                            Secure Complaint Management
                        </Heading>
                        <Text mt={2}>
                            Your complaints are handled with utmost security and confidentiality.
                        </Text>
                    </Box>
                </div>
            </Carousel>
        </Box>
    );
};

export default Slider;
