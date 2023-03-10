import { Avatar, Badge, Box, Container, Image, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const Post = () => {
    const location = useLocation();
    return (
        <Box display="flex" flexDir="row" bg="#23262F" p={10}>
            <Container
                display="flex"
                flexDir="column"
                maxW="container.lg"
                w={{ base: "100%", md: "50%" }}
                mt="13vh"
            >
                <Text
                    color="gray.500"
                    fontWeight="bold"
                    textTransform="uppercase"
                    letterSpacing="-0.05em"
                    fontSize="xs"
                >
                    Posted by username on date
                </Text>
                <Badge
                    colorScheme="blue"
                    borderRadius="full"
                    px="2"
                    fontSize="0.8em"
                    textTransform="uppercase"
                    letterSpacing="-0.05em"
                    fontWeight="bold"
                    my="2"
                    w="fit-content"
                >
                    tag
                </Badge>
                <Text color="white" fontSize="4xl" fontWeight="bold" mt="2">
                    Title
                </Text>
                {/* image */}
                <Box display="flex" flexDir="column" mt="4">
                    <Image
                        src="https://a.ppy.sh/3"
                        borderRadius="lg"
                        w={{ base: "100%", md: "50%" }}
                        o
                    />
                </Box>
                {/* para */}
                <Box>
                    <Text color="white" fontSize="md" mt="4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed euismod, nisl nec aliquam aliquam, nunc nisl
                        condimentum nunc, nec ultricies nisl nunc eget nunc. Sed
                        euismod, nisl nec aliquam aliquam, nunc nisl condimentum
                        nunc, nec ultricies nisl nunc eget nunc. Sed euismod,
                        nisl nec aliquam aliquam, nunc nisl condimentum nunc,
                        nec
                    </Text>
                </Box>
                {/* comments section */}
                <Box display="flex" flexDir="column" mt="4">
                    <Text color="white" fontSize="xl" fontWeight="bold">
                        Comments
                    </Text>

                    <Box display="flex" flexDir="row" mt="4">
                        <Avatar src="https://a.ppy.sh" mr={3} />
                        <Box display="flex" flexDir="column">
                            <Text color="white" fontSize="md" fontWeight="bold">
                                Username
                            </Text>
                            <Text color="gray.500" fontSize="sm">
                                Date
                            </Text>

                            <Text color="white" fontSize="md" mt="2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed euismod, nisl nec aliquam
                                aliquam, nunc nisl condimentum nunc, nec
                            </Text>

                            <Box display="flex" flexDir="row" mt="2">
                                <Text
                                    color="white"
                                    fontSize="md"
                                    fontWeight="bold"
                                    mr="2"
                                >
                                    Reply
                                </Text>
                                <Text
                                    color="white"
                                    fontSize="md"
                                    fontWeight="bold"
                                    mr="2"
                                >
                                    Upvote
                                </Text>
                                <Text
                                    color="white"
                                    fontSize="md"
                                    fontWeight="bold"
                                    mr="2"
                                >
                                    Downvote
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Post;
