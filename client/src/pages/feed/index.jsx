import {
    Box,
    Container,
    Heading,
    Spinner,
    Stack,
    Skeleton,
    SkeletonCircle,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import ListItem from "../../components/feed/ListItem";
import axios from "axios";
const Feed = () => {
    // Get the user from the AuthContext.
    const user = useAuth();
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchFeed = () => {
        axios
            .get("http://localhost:5000/api/posts")
            .then((res) => {
                setFeed(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const convertDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };
    useEffect(() => {
        fetchFeed();
    }, []);
    useEffect(() => {
        setLoading(false);
    }, [feed]);
    return user ? (
        <Box>
            <Container
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                maxW="container.2xl"
                // h="100vh"
                bg={user ? "#23262F" : "#FCFCFD"}
                p={4}
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    maxW="container.xl"
                    w="100%"
                    mt="13vh"
                    bg={user ? "#1B1D24" : "#FCFCFD"}
                    borderRadius={20}
                >
                    <Heading color="#FFF" p={10}>
                        Welcome, {user.username}!
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
                            <Box
                                fontWeight="bold"
                                visibility={{
                                    lg: "visible",
                                    md: "visible",
                                    base: "hidden",
                                }}
                            >
                                TAGS
                            </Box>
                        </Box>
                    </Box>
                    {/* ListItems */}
                    <Box display="flex" flexDirection="column">
                        {!loading ? (
                            feed.map((post) => (
                                <ListItem
                                    key={post.id}
                                    topic={post.title}
                                    author={post.username}
                                    date={convertDate(
                                        post.created_at.split("T")[0],
                                    )}
                                    upvotes={
                                        post.upvotes > 1
                                            ? `${post.upvotes} upvotes`
                                            : `${post.upvotes} upvote`
                                    }
                                    tags={post.tags}
                                />
                            ))
                        ) : (
                            // ChakraUI Skeleton
                            <Box opacity={0.3}>
                                <Stack px={10} mb={3} mt={2} display="flex">
                                    <SkeletonCircle size="10" />
                                    <Skeleton height="20px" />
                                    <Skeleton height="20px" />
                                </Stack>
                                <Stack px={10} mb={3} display="flex">
                                    <SkeletonCircle size="10" />
                                    <Skeleton height="20px" />
                                    <Skeleton height="20px" />
                                </Stack>
                                <Stack px={10} mb={3} display="flex">
                                    <SkeletonCircle size="10" />
                                    <Skeleton height="20px" />
                                    <Skeleton height="20px" />
                                </Stack>
                                <Stack px={10} mb={3} display="flex">
                                    <SkeletonCircle size="10" />
                                    <Skeleton height="20px" />
                                    <Skeleton height="20px" />
                                </Stack>
                                <Stack px={10} mb={3} display="flex">
                                    <SkeletonCircle size="10" />
                                    <Skeleton height="20px" />
                                    <Skeleton height="20px" />
                                </Stack>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    ) : (
        <Box bg="#23262F">
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
                <Spinner color="#FCFCFD" />
            </Container>
        </Box>
    );
};

export default Feed;
