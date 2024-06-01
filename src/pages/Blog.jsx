import { Box, Heading, Text } from "@chakra-ui/react";

function Blog() {
  return (
    <Box p={5}>
      <Heading as="h1" size="xl" mb={5}>
        Blog
      </Heading>
      <Text>Welcome to the blog section!</Text>
    </Box>
  );
}

export default Blog;
