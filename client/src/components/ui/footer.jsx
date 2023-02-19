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
      <Box w="50%" display="flex" gap="30px" alignItems="center">
        <Box padding="2%">
          {/* insert logo */}
          <Heading color="#FCFCFD">Thoth</Heading>
        </Box>

        <Text color="#777E90">Sign up</Text>
        <Text color="#777E90">Log in</Text>
        <Text color="#777E90">About</Text>
      </Box>
      <Divider w="50%" colorScheme="gray" mt="20px" mb="20px" />
      <Box w="50%">
        <Text color="#777E90" mb="20px">
          Copyright © 2023 Thoth. All rights reserved
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
