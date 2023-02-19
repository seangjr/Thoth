import {
  Button,
  Heading,
  Text,
  Box,
  Image,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

import Logo from "../../assets/tlg.png";

const register = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      bgColor="#23262F"
      overflow="hidden"
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box>
        <Image src={Logo} alt="Thoth Logo" mb="20px" />
        <Heading size="xl" color="#FCFCFD" mb="20px">
          Sign up
        </Heading>
        <FormControl mb="15px">
          <FormLabel size="xs" color="#777E90">
            EMAIL:
          </FormLabel>
          <Input type="email" color="#777E90" />
        </FormControl>
        <FormControl mb="15px">
          <FormLabel size="xs" color="#777E90">
            USERNAME:
          </FormLabel>
          <Input color="#777E90" />
        </FormControl>
        <FormControl mb="15px">
          <FormLabel size="xs" color="#777E90">
            PASSWORD:
          </FormLabel>
          <Input type="password" color="#777E90" />
        </FormControl>
        <Button colorScheme="gray">Get Started</Button>
      </Box>
    </Box>
  );
};

export default register;
