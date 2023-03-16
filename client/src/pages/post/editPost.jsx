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
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
const EditPost = () => {
    const location = useLocation();
    const toast = useToast();
    const user = useAuth();
    const navigate = useNavigate();
    const [postDetails, setPostDetails] = useState({
        title: location.state.title,
        content: location.state.content,
        tags: location.state.tags,
    });
    const handleSubmit = () => {
        axios
            .put(`http://localhost:5000/api/posts/${location.state.post_id}`, {
                ...postDetails,
                user_id:
                    user.role === "admin" ? location.state.user_id : user.id,
            })
            .then((res) => {
                console.log(res.data);
                console.log(postDetails);
                toast({
                    title: "Post updated",
                    description: "Your post has been updated successfully!",
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
                        "Something went wrong while updating your post",
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
                <Heading size="xl">Edit Post</Heading>
                <Text mt="4" fontSize="md">
                    Edit the title and details of your post!
                </Text>
            </Box>
            <Box mt="8">
                <FormControl isRequired>
                    <FormLabel color="gray.400">Post title</FormLabel>
                    <Box w={{ base: "100%", md: "50%" }}>
                        <Input
                            w="100%"
                            color="#fff"
                            value={postDetails.title}
                            onChange={(e) =>
                                setPostDetails({
                                    ...postDetails,
                                    title: e.target.value,
                                })
                            }
                        />
                    </Box>
                </FormControl>
                <FormControl mt="4" isRequired>
                    <FormLabel color="gray.400">Post content</FormLabel>
                    <Box w={{ base: "100%", md: "50%" }}>
                        <Textarea
                            placeholder="Type your message here..."
                            h={{ base: "8rem", md: "10rem" }}
                            w="100%"
                            color="#fff"
                            value={postDetails.content}
                            onChange={(e) =>
                                setPostDetails({
                                    ...postDetails,
                                    content: e.target.value,
                                })
                            }
                        />
                    </Box>
                </FormControl>
                <FormControl mt="4" isRequired>
                    <FormLabel color="gray.400">Tags</FormLabel>
                    <Box w={{ base: "100%", md: "50%" }}>
                        <Input
                            w="100%"
                            color="#fff"
                            placeholder="Separated by space"
                            value={postDetails.tags}
                            onChange={(e) =>
                                setPostDetails({
                                    ...postDetails,
                                    tags: e.target.value,
                                })
                            }
                        />
                    </Box>
                </FormControl>
                <Button
                    mt="4"
                    colorScheme="blue"
                    size="md"
                    onClick={handleSubmit}
                >
                    Update post
                </Button>
            </Box>
        </Box>
    );
};
export default EditPost;
