import { Box, Text, Avatar, Button } from "@chakra-ui/react";
import { useState } from "react";

const Comment = ({
    id,
    parentId,
    content,
    upvotes,
    user,
    replyingTo,
    date,
}) => {
    const [showCommentEditor, toggleCommentEditor] = useState(false);
    const [editorMode, setEditorMode] = useState("reply");
    const handleClick = (e) => {
        if (e.target.value === "reply") {
            setEditorMode("reply");
            toggleCommentEditor(!showCommentEditor);
        }

        if (e.target.value === "edit") {
            setEditorMode("edit");
            toggleCommentEditor(!showCommentEditor);
        }
    };
    return (
        <Box display="flex" flexDir="row" mt="4">
            <Avatar src="https://a.ppy.sh" mr={3} />
            <Box display="flex" flexDir="column">
                <Text color="white" fontSize="md" fontWeight="bold">
                    {user}
                </Text>
                <Text color="gray.500" fontSize="sm">
                    {date}
                </Text>

                <Text color="white" fontSize="md" mt="2">
                    {content}
                </Text>

                <Box display="flex" flexDir="row" mt="2">
                    <Text
                        color="white"
                        p={0}
                        bg="none"
                        fontSize="md"
                        fontWeight="bold"
                        mr="2"
                        cursor="pointer"
                        as={Button}
                        _hover={{
                            color: "blue.100",
                            bg: "none",
                        }}
                        transition={"0.2s ease"}
                        onClick={handleClick}
                        value="reply"
                    >
                        Reply
                    </Text>
                </Box>
            </Box>
        </Box>
    );
};

export default Comment;
