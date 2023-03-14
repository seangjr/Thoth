import { createContext, useContext, useState } from "react";
import axios from "axios";

const CommentsContext = createContext();
export const useComments = () => {
    return useContext(CommentsContext);
};

const CommentsProvider = ({ children }) => {
    const [comments, setComments] = useState([]);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    // Load comments
    const loadComments = () => {
        axios.get("http://localhost:5000/api/comments").then((res) => {
            setComments(res.data);
        });
    };

    // Add comment
    const addComment = (user_id, post_id, content) => {
        axios
            .post("http://localhost:5000/api/comments", {
                user_id,
                post_id,
                content,
            })
            .then((res) => {
                setComments([...comments, res.data]);
            });
    };

    // New reply
    const reply = (parentId, user, comment, replyingTo) => {
        // TODO
    };

    // Delete comment
    const deleteComment = (id) => {
        axios.delete(`http://localhost:5000/api/comments/${id}`).then(() => {
            setComments(comments.filter((comment) => comment._id !== id));
        });
    };

    // Edit comment
    const editComment = (id, content) => {
        axios.put(`http://localhost:5000/api/comments/${id}`, { content });
    };

    // Upvote
    const upvote = (id) => {
        axios.put(`http://localhost:5000/api/comments/upvote/${id}`);
    };

    // Downvote
    const downvote = (id) => {
        axios.put(`http://localhost:5000/api/comments/downvote/${id}`);
    };

    const value = {
        comments,
        loadComments,
        addComment,
        reply,
        deleteComment,
        editComment,
        showDeleteDialog,
        setShowDeleteDialog,
        upvote,
        downvote,
    };

    return (
        <CommentsContext.Provider value={value}>
            {children}
        </CommentsContext.Provider>
    );
};

export default CommentsProvider;
