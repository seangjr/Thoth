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
    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Add login logic
    };
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
                <form onSubmit={handleSubmit}>
                    <FormControl
                        mb="15px"
                        w={{ lg: "400px", md: "400px", base: "100%" }}
                        isRequired
                    >
                        <FormLabel size="xs" color="#777E90">
                            Email
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
                        isRequired
                    >
                        <FormLabel size="xs" color="#777E90">
                            Password
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
                        type="submit"
                    >
                        Login
                    </Button>
                    <Text color="#777E90">
                        Don't have an account?{" "}
                        <Link color="#5E6EFF" as={NavLink} to="/register">
                            Sign up now!
                        </Link>
                    </Text>
                </form>
            </Box>
        </Box>
    );
};

export default login;
