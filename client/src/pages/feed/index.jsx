import { Box, Container, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
const Feed = () => {
    // Get the user from the AuthContext.
    const user = useAuth();
    return user ? (
        <Box>
            <Container
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                maxW="container.lg"
                centerContent
                h="100vh"
                p={4}
            >
                Feed content goes here
            </Container>
        </Box>
    ) : (
        <Box>
            <Container
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                maxW="container.lg"
                centerContent
                h="100vh"
                p={4}
            >
                <Spinner />
            </Container>
        </Box>
    );
};

export default Feed;
