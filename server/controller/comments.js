const commentsModel = require("../model/comments");
module.exports.getComments = (req, res) => {
    commentsModel
        .getComments()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.getComment = (req, res) => {
    const { id } = req.params;
    commentsModel
        .getComment(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.getCommentsByPost = (req, res) => {
    const { id } = req.params;
    commentsModel
        .getCommentsByPost(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.createComment = (req, res) => {
    const { post_id, user_id, parent_id, comment } = req.body;
    commentsModel
        .createComment(post_id, user_id, parent_id, comment)
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => {
            if (err.code === "ER_NO_REFERENCED_ROW_2") {
                res.status(400).end("Invalid post_id or user_id");
            } else if (err.code === "MISSING_REQUIRED_FIELDS") {
                res.status(400).end("Missing required fields");
            } else {
                res.status(500).end(err.toString());
            }
        });
};

module.exports.deleteComment = (req, res) => {
    const { id } = req.body;
    commentsModel
        .deleteComment(id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            if (err.code === "ER_ROW_IS_REFERENCED_2") {
                res.status(400).end(
                    "Cannot delete comment because it is referenced by another table",
                );
            } else {
                res.status(500).end(err.toString());
            }
        });
};

module.exports.checkUpvotes = (req, res) => {
    const { id } = req.params;
    commentsModel
        .checkUpvotes(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.checkUpvote = (req, res) => {
    const { comment_id, user_id } = req.params;
    commentsModel
        .checkUpvote(comment_id, user_id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.upvote = (req, res) => {
    const { comment_id, user_id } = req.body;
    commentsModel
        .upvote(comment_id, user_id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.downvote = (req, res) => {
    const { comment_id, user_id } = req.body;
    commentsModel
        .downvote(comment_id, user_id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};
