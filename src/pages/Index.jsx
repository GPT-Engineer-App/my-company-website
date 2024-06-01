import { Container, Box, VStack, HStack, Text, Heading, Button, IconButton, Image, Link } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Header */}
      <Box as="header" w="100%" p={4} bg="teal.500" color="white">
        <HStack justifyContent="space-between">
          <Heading as="h1" size="lg">
            My Company
          </Heading>
          <HStack spacing={4}>
            <Link href="#about" color="white">
              About
            </Link>
            <Link href="#contact" color="white">
              Contact
            </Link>
          </HStack>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box as="section" w="100%" p={8} textAlign="center">
        <VStack spacing={4}>
          <Heading as="h2" size="2xl">
            Welcome to My Company
          </Heading>
          <Text fontSize="lg">We provide the best services to help your business grow.</Text>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </VStack>
      </Box>

      {/* About Section */}
      <Box as="section" w="100%" p={8} bg="gray.100" id="about">
        <VStack spacing={4}>
          <Heading as="h3" size="xl">
            About Us
          </Heading>
          <Text fontSize="md">My Company has been a leader in the industry for over 10 years. Our team of experts are dedicated to providing top-notch services to our clients.</Text>
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya2luZ3xlbnwwfHx8fDE3MTcyMTI5MTh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Our Team" borderRadius="md" />
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" w="100%" p={4} bg="teal.500" color="white" textAlign="center">
        <VStack spacing={2}>
          <Text>&copy; {new Date().getFullYear()} My Company. All rights reserved.</Text>
          <HStack spacing={4}>
            <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} size="lg" colorScheme="teal" />
            <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" colorScheme="teal" />
            <IconButton as="a" href="https://linkedin.com" aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" colorScheme="teal" />
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;
