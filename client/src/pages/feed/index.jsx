import {
    Box,
    Container,
    Heading,
    Spinner,
    Avatar,
    Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import ListItem from "../../components/feed/ListItem";
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
                maxW="container.2xl"
                centerContent
                h="100vh"
                bg={user ? "#23262F" : "#FCFCFD"}
                p={4}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    maxW="container.xl"
                    w="100%"
                    centerContent
                    h="100vh"
                    mt="13vh"
                    bg={user ? "#1B1D24" : "#FCFCFD"}
                    borderRadius={20}
                >
                    <Heading color="#FFF" p={10}>
                        Welcome to Thoth, {user.username}!
                    </Heading>
                    <Box px={10}>
                        <Box
                            display="flex"
                            flexDirection="row"
                            bg="#23262F"
                            justifyContent="space-between"
                            borderRadius={10}
                            w="100%"
                            p={3}
                            color="#FFF"
                        >
                            <Box fontWeight="bold">TOPIC</Box>
                            <Box fontWeight="bold">TAGS</Box>
                        </Box>
                    </Box>
                    {/* ListItems */}
                    <Box display="flex" flexDirection="column">
                        <ListItem />
                        <ListItem />
                        <ListItem />
                    </Box>
                </Box>
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
                bg="#23262F"
                centerContent
                h="100vh"
                p={4}
            >
                <Spinner color="#FCFCFD" />
            </Container>
        </Box>
    );
};

export default Feed;
