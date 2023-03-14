import { Box, Flex, Avatar, Textarea, Button, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import axios from "axios";
const CommentEditor = ({
    isUpdate,
    replyingTo,
    isNewComment,
    id,
    parentId,
    post_id,
    closeEditor,
}) => {
    const [commentText, setCommentText] = useState("");
    const user = useAuth();
    useEffect(() => {
        replyingTo && setCommentText(`@${replyingTo} `);
    }, []);

    // remove @username from commentText
    const removeUsername = () => {
        return commentText.substring(replyingTo.length + 2);
    };

    const handleClick = () => {
        if (commentText === "") return;
        if (isUpdate) {
            // editComment(id, commentText);
            closeEditor();
        }

        //reply
        if (!isUpdate && !isNewComment) {
            // reply(parentId, user.username, cleanedCommentText, replyingTo);
            closeEditor();
        }

        //new comment
        if (isNewComment) {
            axios.post("http://localhost:5000/api/comments", {
                user_id: user.id,
                post_id: post_id,
                parent_id: parentId,
                comment: commentText,
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
