import { Box, Text, Avatar, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useCallback } from "react";

import CommentEditor from "./CommentEditor";
import Upvotes from "./Upvotes";

const Comment = ({
    id,
    parentId,
    content,
    user,
    replyingTo,
    date,
    setCount,
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
                    isUpdate
                    closeEditor={() => toggleCommentEditor(false)}
                />
            );
        }
    };

    return (
        <>
            <Box display="flex" flexDir="row" mt="4">
                <Upvotes isComment id={id} />
                <Avatar src="https://a.ppy.sh" mr={3} />
                <Box display="flex" flexDir="column">
                    <Text
                        color="white"
                        fontSize="md"
                        fontWeight="bold"
                        as={Link}
                        to={`/user/${user}`}
                        _hover={{
                            color: "blue.100",
                        }}
                        transition="0.2s ease"
                    >
                        {user}
                    </Text>
                    <Text color="gray.500" fontSize="sm">
                        {date}
                    </Text>

                    <Text color="white" fontSize="md" mt="2">
                        {content}
                    </Text>

                    <Box display="flex" flexDir="row" mt="2">
                        {/* <Text
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
                        </Text> */}
                        {/* edit */}
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
                            value="edit"
                        >
                            Edit
                        </Text>
                        {/* delete */}
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
                                color: "red.200",
                                bg: "none",
                            }}
                            transition={"0.2s ease"}
                            onClick={handleClick}
                            value="delete"
                        >
                            Delete
                        </Text>
                    </Box>
                </Box>
            </Box>
            {showCommentEditor && renderCommentEditor(editorMode)}
        </>
    );
};

export default Comment;
