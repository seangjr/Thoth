import {
    Button,
    Heading,
    Text,
    Box,
    Image,
    FormControl,
    FormLabel,
    Input,
    Link,
    useToast,
} from "@chakra-ui/react";

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import MD5 from "crypto-js/md5";

import Logo from "../../assets/tlg.png";

const Register = () => {
    const navigate = useNavigate();
    const toast = useToast();
    const [registerDetails, setRegisterDetails] = useState({
        email: "",
        username: "",
        password: "",
    });

    const handleOnChange = (e) => {
        setRegisterDetails({
            ...registerDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        // TODO: Add register logic
        axios
            .post("http://localhost:5000/api/users/register", {
                email: e.target.email.value,
                username: e.target.username.value,
                password: MD5(e.target.password.value).toString(), // MD5 hash the password
            })
            .then((res) => {
                console.log("res");
            })
            .catch((err) => {
                toast({
                    title: "An error when registering user.",
                    description: "Please ensure all fields are filled",
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
            bgColor="#23262F"
            overflow="hidden"
            h="100vh"
            justifyContent="center"
            alignItems="center"
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
                <Heading size="xl" color="#FCFCFD" mb="20px">
                    Sign up
                </Heading>
                <form onSubmit={handleRegister}>
                    <FormControl
                        mb="15px"
                        w={{ lg: "400px", md: "400px", base: "200px" }}
                        isRequired
                    >
                        <FormLabel size="xs" color="#777E90">
                            Email
                        </FormLabel>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            color="#777E90"
                            placeholder="example@site.com"
                            onChange={handleOnChange}
                        />
                    </FormControl>
                    <FormControl
                        mb="15px"
                        w={{ lg: "400px", md: "400px", base: "200px" }}
                        isRequired
                    >
                        <FormLabel size="xs" color="#777E90">
                            Username
                        </FormLabel>
                        <Input
                            type="text"
                            color="#777E90"
                            id="username"
                            name="username"
                            onChange={handleOnChange}
                        />
                    </FormControl>
                    <FormControl
                        mb="15px"
                        w={{ lg: "400px", md: "400px", base: "200px" }}
                        isRequired
                    >
                        <FormLabel size="xs" color="#777E90">
                            Password
                        </FormLabel>
                        <Input
                            type="password"
                            color="#777E90"
                            id="password"
                            name="password"
                            onChange={handleOnChange}
                        />
                    </FormControl>
                    <Button
                        mt="10px"
                        mb="10px"
                        colorScheme="gray"
                        w={{ lg: "400px", md: "400px", base: "200px" }}
                        type="submit"
                    >
                        Sign up
                    </Button>
                    <Text mb="20px" color="#777E90" w="100%">
                        Already have an account?{" "}
                        <Link color="#5E6EFF" as={NavLink} to="/login">
                            Log in
                        </Link>
                    </Text>
                </form>
            </Box>
        </Box>
    );
};

export default Register;
