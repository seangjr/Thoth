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
} from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

import Logo from "../../assets/tlg.png";

const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        // TODO: Add register logic
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
                            color="#777E90"
                            placeholder="example@site.com"
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
                        <Input color="#777E90" />
                    </FormControl>
                    <FormControl
                        mb="15px"
                        w={{ lg: "400px", md: "400px", base: "200px" }}
                        isRequired
                    >
                        <FormLabel size="xs" color="#777E90">
                            Password
                        </FormLabel>
                        <Input type="password" color="#777E90" />
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
