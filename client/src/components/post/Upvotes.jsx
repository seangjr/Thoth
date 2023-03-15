import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

import { useAuth } from "../../contexts/AuthContext";

const Upvotes = ({ isComment, isPost, id }) => {
    const [upvoteCount, setUpvoteCount] = useState(0);
    const [upvoteState, setUpvoteState] = useState(false);
    const user = useAuth();
    const fetchUpvotes = () => {
        if (isComment) {
            axios
                .get(`http://localhost:5000/api/comments/upvotes/${id}`)
                .then((res) => {
                    setUpvoteCount(res.data.length);
                });
        }
        if (isPost) {
            axios
                .get(`http://localhost:5000/api/posts/upvotes/${id}`)
                .then((res) => {
                    setUpvoteCount(res.data.length);
                });
        }
    };
    useEffect(() => {
        fetchUpvotes();
    }, []);
    const checkIfUpvoted = () => {
        if (isComment) {
            axios
                .get(
                    `http://localhost:5000/api/comments/upvote/${id}/${user.id}`,
                )
                .then((res) => {
                    console.log(res.data);
                    if (res.data[0]) {
                        return true;
                    }
                });
        }
        if (isPost) {
            axios
                .get(`http://localhost:5000/api/posts/upvote/${id}/${user.id}`)
                .then((res) => {
                    if (res.data[0]) {
                        return true;
                    }
                });
        }
    };
    const handleUpvote = () => {
        if (upvoteState) return;
        if (isComment) {
            //axios call to update upvote count
            axios
                .post("http://localhost:5000/api/comments/upvote", {
                    comment_id: id,
                    user_id: user.id,
                })
                .then(() => {
                    setUpvoteState(true);
                    setUpvoteCount(upvoteCount + 1);
                });
        } else if (isPost) {
            //axios call to update upvote count
            axios
                .post("http://localhost:5000/api/posts/upvote", {
                    post_id: id,
                    user_id: user.id,
                })
                .then(() => {
                    setUpvoteState(true);
                    setUpvoteCount(upvoteCount + 1);
                });
        }
    };

    const handleDownvote = () => {
        if (!upvoteState) return;
        if (isComment) {
            //axios call to update upvote count
            axios
                .delete("http://localhost:5000/api/comments/downvote", {
                    data: {
                        comment_id: id,
                        user_id: user.id,
                    },
                })
                .then(() => {
                    setUpvoteState(false);
                    setUpvoteCount(upvoteCount - 1);
                });
        } else if (isPost) {
            //axios call to update upvote count
            axios
                .delete("http://localhost:5000/api/posts/downvote", {
                    data: {
                        post_id: id,
                        user_id: user.id,
                    },
                })
                .then(() => {
                    setUpvoteState(false);
                    setUpvoteCount(upvoteCount - 1);
                });
        }
    };
    return (
        <Box w="40px" mt={isPost ? "13vh" : "0"} mr={6}>
            <Flex
                alignItems="center"
                direction="column"
                justifyContent="space-between"
                borderRadius="xl"
                bg="gray.700"
            >
                <IconButton
                    icon={<AddIcon />}
                    color="white"
                    fontSize=".8rem"
                    bg="none"
                    onClick={handleUpvote}
                    _hover={{
                        color: "blue.100",
                        bg: "none",
                    }}
                />
                <Text color="white" fontSize="sm" mx={4}>
                    {upvoteCount}
                </Text>
                <IconButton
                    icon={<MinusIcon />}
                    color="white"
                    bg="none"
                    fontSize=".8rem"
                    onClick={handleDownvote}
                    _hover={{
                        color: "blue.100",
                        bg: "none",
                    }}
                />
            </Flex>
        </Box>
    );
};

export default Upvotes;
