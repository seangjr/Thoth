import {
    Box,
    Flex,
    Avatar,
    Textarea,
    Button,
    Text,
    useToast,
} from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
const CommentEditor = ({
    isUpdate,
    isNewComment,
    id,
    parentId,
    post_id,
    closeEditor,
    onComment,
    comments,
    content,
}) => {
    const [commentText, setCommentText] = useState("");
    const navigate = useNavigate();
    const toast = useToast();
    const user = useAuth();
    useEffect(() => {
        if (isUpdate) {
            setCommentText(content);
        }
    }, []);

    const handleOnComment = useCallback(
        // run onComment function from parent component which is in post/index.jsx which is setComment
        (comment) => {
            onComment([...comments, comment]);
        },
        [comments],
    );

    const handleClick = () => {
        if (commentText === "") return;
        if (isUpdate) {
            axios
                .put(`http://localhost:5000/api/comments/${id}`, {
                    comment: commentText,
                })
                .then(() => {
                    toast({
                        title: "Comment updated.",
                        description: "Your page will reload shortly.",
                        status: "success",
                        duration: 3000,
                        isClosable: true,
                        position: "top",
                    });
                    setTimeout(() => {
                        navigate(0);
                    }, 500);
                })
                .catch(() => {
                    toast({
                        title: "Error",
                        description:
                            "Something went wrong while updating your comment",
                        status: "error",
                        duration: 3000,
                        isClosable: true,
                        position: "top",
                    });
                });
            closeEditor();
        }

        //new comment
        if (isNewComment) {
            console.log(commentText);
            axios
                .post("http://localhost:5000/api/comments", {
                    post_id: post_id,
                    user_id: user.id,
                    comment: commentText,
                    parent_id: parentId,
                })
                .then((res) => {
                    handleOnComment(res.data[0]);
                });
        }

        setCommentText("");
    };
    return (
        <Box>
            <Flex alignItems="start" justifyContent="space-between" mt={3}>
                {/* image */}
                <Avatar src="https://a.ppy.sh" />
                <Textarea
                    color="white"
                    ml={3}
                    placeholder="Add a comment"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    resize="none"
                />
                {}
                <Button
                    bg="none"
                    onClick={handleClick}
                    _hover={{
                        opacity: "0.6",
                        bg: "none",
                    }}
                >
                    <Text color="white">
                        {isUpdate ? "Edit" : isNewComment ? "Send" : "Reply"}
                    </Text>
                </Button>
            </Flex>
        </Box>
    );
};
export default CommentEditor;
