import {
    FormControl,
    FormLabel,
    Box,
    Input,
    Button,
    Heading,
    Image,
    Text,
    Link,
    useToast,
} from "@chakra-ui/react";

import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import MD5 from "crypto-js/md5";

import Logo from "../../assets/tlg.png";

const Login = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const handleSubmit = (e) => {
        // e is the event
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/users/login", {
                email: e.target.email.value,
                password: MD5(e.target.password.value).toString(), // MD5 hash the password
            })
            .then((res) => {
                localStorage.setItem("token", res.data.token); // Store the token in localStorage
                localStorage.setItem("user", res.data.id); // Store the user ID in localStorage
                navigate("/feed"); // Navigate to the feed
            })
            .catch((err) => {
                toast({
                    title: "An error occurred.",
                    description: err.response.data.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });
            });
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
                            id="email"
                            name="email"
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
                            id="password"
                            name="password"
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

export default Login;
