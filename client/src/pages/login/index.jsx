import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Input,
    Button,
    Heading,
    Image,
    Text,
    Link,
} from "@chakra-ui/react";

import { Navlink } from "react-router-dom";

import Logo from "../../assets/tlg.png";

const login = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgColor="#23262F"
            overflow="hidden"
            w="100vw"
            h="100vh"
        >
            <Box w="50vw" h="50vh" boxShadow="outline">
                <FormControl>
                    <Image src={Logo} alt="Thoth Logo" mb="20px" />
                    <Heading size="xl" color="#FFFFFF" mb="20px">
                        Log In
                    </Heading>
                    <FormLabel fontSize="12px" color="#B1B5C3">
                        EMAIL/USERNAME:{" "}
                    </FormLabel>
                    <Input
                        type="email"
                        placeholder="Please enter your email/username"
                        mb="20px"
                        borderRadius="10px"
                    />
                    <FormLabel fontSize="12px" color="#B1B5C3">
                        PASSWORD:{" "}
                    </FormLabel>
                    <Input
                        type="password"
                        placeholder="Please enter your password"
                        mb="20px"
                        borderRadius="10px"
                    />
                    <Button colorScheme="gray" w="100%" size="lg">
                        Login
                    </Button>
                    <Text color="white">
                        Don't have an account?{" "}
                        <Link color="blue">Sign up now!</Link>
                    </Text>
                </FormControl>
            </Box>
        </Box>
    );
};

export default login;
