import { Badge, Box, Container, Image, Text } from "@chakra-ui/react";
import CommentEditor from "../../components/post/CommentEditor";
import CommentsProvider from "../../components/post/useComments";
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
                <CommentsProvider>
                    <Box display="flex" flexDir="column" mt="4">
                        <Text color="white" fontSize="xl" fontWeight="bold">
                            Comments
                        </Text>
                        <CommentEditor />
                    </Box>
                </CommentsProvider>
            </Container>
        </Box>
    );
};

export default Post;
