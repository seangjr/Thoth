import {
  Heading,
  Box,
  Text,
  Divider,
  Input,
  IconButton,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bgColor="#23262F"
      w="100%"
      h="30%"
      zIndex="9"
    >
      <Box
        w="70%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          {/* insert logo */}
          <Heading color="#FCFCFD">Thoth</Heading>
        </Box>
        <Box>
          <Text color="#777E90">About</Text>
          <Text color="#777E90">Projects</Text>
        </Box>
        <Box>
          <Text color="#777E90">What We Do</Text>
          <Text color="#777E90">Press</Text>
        </Box>
        <Box>
          <Text color="#777E90">Jobs</Text>
          <Text color="#777E90">Download</Text>
        </Box>
      </Box>
      <Divider w="70%" colorScheme="gray" mt="20px" mb="20px" />
      <Box w="70%">
        <Text color="#777E90" mb="20px">
          Copyright © 2023 Thoth. All rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
