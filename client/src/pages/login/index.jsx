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

import { NavLink, Navlink } from "react-router-dom";

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
            h="100vh"
        >
            <Box>
                <Image
                    src={Logo}
                    alt="Thoth Logo"
                    mb="20px"
                    boxSize="69px"
                    visibility={{
                        lg: "visible",
                        md: "visible",
                        base: "hidden",
                    }}
                />
                <Heading size="xl" color="#FFFFFF" mb="20px">
                    Log In
                </Heading>
                <FormControl
                    mb="15px"
                    w={{ lg: "400px", md: "400px", base: "100%" }}
                >
                    <FormLabel size="xs" color="#777E90">
                        EMAIL/USERNAME:{" "}
                    </FormLabel>
                    <Input
                        type="email"
                        mb="20px"
                        borderRadius="10px"
                        color="#777E90"
                    />
                </FormControl>
                <FormControl
                    mb="15px"
                    w={{ lg: "400px", md: "400px", base: "100%" }}
                >
                    <FormLabel size="xs" color="#777E90">
                        PASSWORD:{" "}
                    </FormLabel>
                    <Input
                        type="password"
                        mb="20px"
                        borderRadius="10px"
                        color="#777E90"
                    />
                </FormControl>
                <Button
                    colorScheme="gray"
                    w={{ lg: "400px", md: "400px", base: "100%" }}
                    mt="10px"
                    mb="10px"
                >
                    Login
                </Button>
                <Text color="#777E90">
                    Don't have an account?{" "}
                    <Link color="#5E6EFF" as={NavLink} to="/register">
                        Sign up now!
                    </Link>
                </Text>
            </Box>
        </Box>
    );
};

export default login;
