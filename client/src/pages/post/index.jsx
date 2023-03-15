import { Badge, Box, Container, Text } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Upvotes from "../../components/post/Upvotes";
import CommentEditor from "../../components/post/CommentEditor";
import Comment from "../../components/post/Comment";
import { useAuth } from "../../contexts/AuthContext";

const Post = () => {
    const location = useLocation();
    const user = useAuth();
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const convertDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
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
