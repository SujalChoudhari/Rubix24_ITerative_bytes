import React from 'react';
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = ({company}) => {
  const blueColor = useColorModeValue('blue.500', 'blue.300');

  // Placeholder data for stats
  const statsData = [
    { label: 'Total Complaints', value: 325 },
    { label: 'Resolved Complaints', value: 280 },
    { label: 'Pending Complaints', value: 45 },
    { label: 'Average Resolution Time', value: '2 days' },
    // Add more stats as needed
  ];

  // Placeholder data for the line chart
  const chartData = [
    { day: 'Day 1', complaints: 30 },
    { day: 'Day 2', complaints: 50 },
    { day: 'Day 3', complaints: 70 },
    { day: 'Day 4', complaints: 40 },
    { day: 'Day 5', complaints: 90 },
    // Add more data for each day
  ];

  return (
    <Box p={4}>
      <Heading mb={4} size="lg" textAlign="center" color={blueColor}>
        Complaint Tracking Stats
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        {statsData.map((stat, index) => (
          <GridItem key={index}>
            <Stat p={4} borderRadius="md" bg={useColorModeValue('white', 'gray.800')} boxShadow="md">
              <StatLabel color={blueColor}>{stat.label}</StatLabel>
              <StatNumber>{stat.value}</StatNumber>
            </Stat>
          </GridItem>
        ))}
      </Grid>
      <Box mt={8}>
        <Text textAlign="center" color={blueColor} mb={4}>
          Complaints Over Time
        </Text>
        
        <LineChart width={600} height={300} data={chartData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
          <XAxis dataKey="day" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="complaints" dot={{r:8}} stroke={blueColor} activeDot={{ r: 8 }} />
        </LineChart>

        {/* Add more charts */}
      </Box>
    </Box>
  );
};

export default Statistics;
