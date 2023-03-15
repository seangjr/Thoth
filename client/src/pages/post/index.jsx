import {
    Badge,
    Box,
    Container,
    Text,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useToast,
} from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Upvotes from "../../components/post/Upvotes";
import CommentEditor from "../../components/post/CommentEditor";
import Comment from "../../components/post/Comment";
import { useAuth } from "../../contexts/AuthContext";

const Post = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const user = useAuth();
    const toast = useToast();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const convertDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };
    const handleDeletePost = () => {
        axios
            .delete(
                `http://localhost:5000/api/posts/${location.state.post_id}/${user.id}`,
            )
            .then((res) => {
                console.log(res.data);
                toast({
                    title: "Post deleted",
                    description: "Your post has been deleted successfully!",
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
                        "Something went wrong while deleting your post",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position: "top",
                });
            });
    };
    const fetchComments = () => {
        axios
            .get(
                `http://localhost:5000/api/comments/post/${location.state.post_id}`,
            )
            .then((res) => {
                setComments(res.data);
            });
    };
    useEffect(() => {
        fetchComments();
    }, []);
    useEffect(() => {
        setLoading(false);
    }, [comments]);

    return (
        <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            bg="#23262F"
            p={10}
        >
            <Box display="flex" flexDir="row">
                <Upvotes isPost id={location.state.post_id} />
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent mt="20vh">
                        <ModalHeader>
                            Are you sure you want to delete this post?
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            This action cannot be undone! All comments and votes
                            on this post will be deleted.
                        </ModalBody>
                        <ModalFooter>
                            <Button colorScheme="blue" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button
                                colorScheme="red"
                                onClick={handleDeletePost}
                            >
                                Delete forever
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Container
                    display="flex"
                    flexDir="column"
                    maxW="container.lg"
                    minH="60vh"
                    mt="13vh"
                >
                    <Text
                        color="gray.500"
                        fontWeight="bold"
                        textTransform="uppercase"
                        letterSpacing="-0.05em"
                        fontSize="xs"
                    >
                        Posted by {location.state.author} on{" "}
                        {location.state.date}
                    </Text>
                    {location.state.tags.split(" ").map((tag) => (
                        <Badge
                            key={tag}
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
                            {tag}
                        </Badge>
                    ))}
                    <Text
                        color="white"
                        fontSize={{ base: "xl", md: "4xl" }}
                        fontWeight="bold"
                        mt="2"
                    >
                        {location.state.title}
                    </Text>
                    {/* para */}
                    <Box>
                        <Text color="white" fontSize="md" mt="4">
                            {location.state.content}
                        </Text>
                    </Box>
                    <Box>
                        {/* buttons to edit or delete post */}
                        {user.username === location.state.author && (
                            <Box display="flex" flexDir="row" mt="4">
                                <Button
                                    mr={3}
                                    colorScheme="blue"
                                    onClick={() =>
                                        navigate("/post/edit", {
                                            state: {
                                                post_id: location.state.post_id,
                                                title: location.state.title,
                                                content: location.state.content,
                                                tags: location.state.tags,
                                            },
                                        })
                                    }
                                >
                                    Edit
                                </Button>

                                <Button colorScheme="red" onClick={onOpen}>
                                    Delete
                                </Button>
                            </Box>
                        )}
                    </Box>
                    {/* comments section */}
                    <Box display="flex" flexDir="column" mt="4">
                        <Text color="white" fontSize="xl" fontWeight="bold">
                            Comments
                        </Text>
                        <CommentEditor
                            isNewComment
                            post_id={location.state.post_id}
                            onComment={setComments}
                            comments={comments}
                        />
                        {!loading ? (
                            comments.map((comment) => (
                                <Comment
                                    id={comment.id}
                                    key={comment.id}
                                    content={comment.content}
                                    user={comment.username}
                                    date={convertDate(comment.date)}
                                />
                            ))
                        ) : (
                            <Text color="white">Loading...</Text>
                        )}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Post;
