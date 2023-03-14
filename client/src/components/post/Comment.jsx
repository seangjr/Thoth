import { Box, Text, Avatar, Button, Flex, IconButton } from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import CommentEditor from "./CommentEditor";
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
    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);
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

    const handleUpvote = () => {
        console.log("upvote");
        setUpvoted(true);
        setDownvoted(false);
    };

    const handleDownvote = () => {
        setDownvoted(true);
        setUpvoted(false);
    };

    const renderCommentEditor = (editorMode) => {
        if (editorMode === "reply") {
            return (
                <CommentEditor
                    parentId={id}
                    replyingTo={user}
                    closeEditor={() => toggleCommentEditor(false)}
                />
            );
        }

        if (editorMode === "edit") {
            return (
                <CommentEditor
                    id={id}
                    content={content}
                    closeEditor={() => toggleCommentEditor(false)}
                />
            );
        }
    };

    const upvoteCounter = () => {
        return (
            <Box mr={5} w="40px">
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
                        {...(upvoted && { color: "blue.100" })}
                        {...(downvoted && { color: "gray.500" })}
                        onClick={handleUpvote}
                        _hover={{
                            color: "blue.100",
                            bg: "none",
                        }}
                    />
                    <Text color="white" fontSize="sm" mx={4}>
                        {upvotes}
                    </Text>
                    <IconButton
                        icon={<MinusIcon />}
                        color="white"
                        bg="none"
                        fontSize=".8rem"
                        {...(downvoted && { color: "blue.100" })}
                        {...(upvoted && { color: "gray.500" })}
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

    return (
        <>
            <Box display="flex" flexDir="row" mt="4">
                {upvoteCounter()}
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
            {showCommentEditor && renderCommentEditor(editorMode)}
        </>
    );
};

export default Comment;
