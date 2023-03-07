import { Heading, Box, Text, Divider, Link } from "@chakra-ui/react";

import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            bgColor="#23262F"
            w="100%"
            h="23vh"
            zIndex="9"
        >
            <Box
                w={{ lg: "50%", md: "full", base: "full" }}
                display="flex"
                gap="30px"
                alignItems="center"
            >
                <Box padding="2%">
                    {/* insert logo */}
                    <Heading
                        color="#FCFCFD"
                        size={{ lg: "md", md: "md", base: "md" }}
                    >
                        Thoth
                    </Heading>
                </Box>

                <Link color="#777E90" as={NavLink} to="register">
                    Sign up
                </Link>
                <Link color="#777E90">Log in</Link>
                <Link color="#777E90">About</Link>
            </Box>
            <Divider
                w={{ lg: "50%", md: "full", base: "full" }}
                colorScheme="gray"
                mt="20px"
                mb="20px"
            />
            <Box w={{ lg: "50%", md: "full", base: "full" }}>
                <Text color="#777E90" mb="20px">
                    Copyright © 2023 Thoth. All rights reserved
                </Text>
            </Box>
        </Box>
    );
};

export default Footer;
