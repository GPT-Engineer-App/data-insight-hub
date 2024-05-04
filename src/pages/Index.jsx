import React, { useState } from "react";
import { Box, Container, Heading, Text, VStack, Button, SimpleGrid, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, useColorModeValue, IconButton, Tooltip } from "@chakra-ui/react";
import { FaChartBar, FaRocket, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const [data, setData] = useState({
    revenue: 500000,
    expenses: 300000,
    netIncome: 200000,
    quarterGrowth: 5,
  });

  const handleRandomizeData = () => {
    setData({
      revenue: Math.round(Math.random() * 1000000),
      expenses: Math.round(Math.random() * 500000),
      netIncome: Math.round(Math.random() * 500000),
      quarterGrowth: parseFloat((Math.random() * 10).toFixed(2)),
    });
  };

  const bg = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading mb={2}>Economic Data Analysis Dashboard</Heading>
          <Text fontSize="lg">Insights into the company's economic performance.</Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Stat p={5} shadow="md" border="1px" borderColor={useColorModeValue("gray.200", "gray.700")} borderRadius="md" bg={bg} color={color}>
            <StatLabel>Total Revenue</StatLabel>
            <StatNumber>${data.revenue.toLocaleString()}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              15%
            </StatHelpText>
          </Stat>

          <Stat p={5} shadow="md" border="1px" borderColor={useColorModeValue("gray.200", "gray.700")} borderRadius="md" bg={bg} color={color}>
            <StatLabel>Total Expenses</StatLabel>
            <StatNumber>${data.expenses.toLocaleString()}</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              12%
            </StatHelpText>
          </Stat>

          <Stat p={5} shadow="md" border="1px" borderColor={useColorModeValue("gray.200", "gray.700")} borderRadius="md" bg={bg} color={color}>
            <StatLabel>Net Income</StatLabel>
            <StatNumber>${data.netIncome.toLocaleString()}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              20%
            </StatHelpText>
          </Stat>

          <Stat p={5} shadow="md" border="1px" borderColor={useColorModeValue("gray.200", "gray.700")} borderRadius="md" bg={bg} color={color}>
            <StatLabel>Quarterly Growth</StatLabel>
            <StatNumber>{data.quarterGrowth}%</StatNumber>
            <StatHelpText>
              <StatArrow type={data.quarterGrowth > 0 ? "increase" : "decrease"} />
              {data.quarterGrowth > 0 ? "Growth" : "Decline"}
            </StatHelpText>
          </Stat>
        </SimpleGrid>

        <Button leftIcon={<FaChartBar />} colorScheme="blue" onClick={handleRandomizeData}>
          Randomize Data
        </Button>

        <Tooltip label="Toggle color mode" hasArrow placement="bottom">
          <IconButton aria-label="Toggle color mode" icon={useColorModeValue(<FaMoon />, <FaSun />)} onClick={() => document.body.classList.toggle("chakra-ui-dark")} isRound />
        </Tooltip>
      </VStack>
    </Container>
  );
};

export default Index;
