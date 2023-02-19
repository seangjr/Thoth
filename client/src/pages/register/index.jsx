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
    Link,
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

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
                <Image src={Logo} alt="Thoth Logo" mb="20px" boxSize="69px" />
                <Heading size="xl" color="#FCFCFD" mb="20px">
                    Sign up
                </Heading>
                <FormControl
                    mb="15px"
                    w={{ lg: "400px", md: "400px", base: "200px" }}
                >
                    <FormLabel size="xs" color="#777E90">
                        EMAIL:
                    </FormLabel>
                    <Input type="email" color="#777E90" />
                </FormControl>
                <FormControl
                    mb="15px"
                    w={{ lg: "400px", md: "400px", base: "200px" }}
                >
                    <FormLabel size="xs" color="#777E90">
                        USERNAME:
                    </FormLabel>
                    <Input color="#777E90" />
                </FormControl>
                <FormControl
                    mb="15px"
                    w={{ lg: "400px", md: "400px", base: "200px" }}
                >
                    <FormLabel size="xs" color="#777E90">
                        PASSWORD:
                    </FormLabel>
                    <Input type="password" color="#777E90" />
                </FormControl>
                <Button
                    mt="10px"
                    mb="10px"
                    colorScheme="gray"
                    w={{ lg: "400px", md: "400px", base: "200px" }}
                >
                    Sign up
                </Button>
                <Text mb="20px" color="#777E90" w="100%">
                    Already have an account?{" "}
                    <Link color="#5E6EFF" as={NavLink} to="/">
                        Log in
                    </Link>
                </Text>
            </Box>
        </Box>
    );
};

export default register;
