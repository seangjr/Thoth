import { Box, Flex, Avatar, Textarea } from "@chakra-ui/react";
import { useState } from "react";
const CommentEditor = () => {
    const [commentText, setCommentText] = useState("");
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
            </Flex>
        </Box>
    );
};
export default CommentEditor;
