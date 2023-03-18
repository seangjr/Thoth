import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const CreatePost = () => {
    const user = useAuth();
    const navigate = useNavigate();
    const toast = useToast();
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/api/posts", {
                title: e.target.title.value,
                content: e.target.content.value,
                tags: e.target.tags.value,
                user_id: user.id,
            })
            .then(() => {
                toast({
                    title: "Post created",
                    description: "Your post has been created successfully",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });
                navigate("/feed");
            })
            .catch(() => {
                toast({
                    title: "Error",
                    description:
                        "Something went wrong while creating your post",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });
            });
    };
    return (
        <Box
            bgColor="#23262F"
            minHeight="100vh"
            px={{ base: "5%", md: "10%" }}
            py="5%"
        >
            <Box color="white" mt="6vh">
                <Heading size="xl">Create post</Heading>
                <Text mt="4" fontSize="md">
                    Contribute to the Thoth community by creating a post!
                </Text>
            </Box>
            <Box mt="8">
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel color="gray.400">Post title</FormLabel>
                        <Box w={{ base: "100%", md: "50%" }}>
                            <Input
                                w="100%"
                                color="#fff"
                                name="title"
                                id="title"
                            />
                        </Box>
                    </FormControl>
                    <FormControl mt="4" isRequired>
                        <FormLabel color="gray.400">Post content</FormLabel>
                        <Box w={{ base: "100%", md: "50%" }}>
                            <Textarea
                                placeholder="Type your message here..."
                                placeholderTextColor="gray.400"
                                h={{ base: "8rem", md: "10rem" }}
                                w="100%"
                                color="#fff"
                                name="content"
                                id="content"
                            />
                        </Box>
                    </FormControl>
                    <FormControl mt="4" isRequired>
                        <FormLabel color="gray.400">Tags</FormLabel>
                        <Box w={{ base: "100%", md: "50%" }}>
                            <Input
                                w="100%"
                                color="#fff"
                                name="tags"
                                id="tags"
                                placeholder="Separated by space"
                            />
                        </Box>
                    </FormControl>
                    <Button mt="4" size="sm" type="submit">
                        Create post
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default CreatePost;
