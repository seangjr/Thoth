import {
    Box,
    Text,
    Avatar,
    Button,
    useDisclosure,
    Modal,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import CommentEditor from "./CommentEditor";
import Upvotes from "./Upvotes";
import { useAuth } from "../../contexts/AuthContext";

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
    const loggedUser = useAuth();
    const toast = useToast();
    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleClick = (e) => {
        if (e.target.value === "reply") {
            setEditorMode("reply");
            toggleCommentEditor(!showCommentEditor);
        }

        if (e.target.value === "edit") {
            setEditorMode("edit");
            toggleCommentEditor(!showCommentEditor);
        }

        if (e.target.value === "delete") {
            onOpen();
            setTimeout(() => {
                window.scrollTo(0, document.body.scrollHeight);
            }, 100);
        }
    };

    const handleDelete = () => {
        axios
            .delete(`http://localhost:5000/api/comments/${id}/${loggedUser.id}`)
            .then((res) => {
                console.log(res.data);
                toast({
                    title: "Comment deleted.",
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
                    description: "Something went wrong deleting your comment",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: "top",
                });
            });
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
                    <Modal isOpen={isOpen} onClose={onClose}>
                        {/* <ModalOverlay /> */}
                        <ModalHeader>Delete Comment</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            Are you sure you want to delete this comment?
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                colorScheme="red"
                                mr={3}
                                onClick={handleDelete}
                            >
                                Delete
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
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
                        {/* edit */}
                        {user === loggedUser.username && (
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
                        )}
                        {/* delete */}
                        {user === loggedUser.username && (
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
                        )}
                    </Box>
                </Box>
            </Box>
            {showCommentEditor && renderCommentEditor(editorMode)}
        </>
    );
};

export default Comment;
