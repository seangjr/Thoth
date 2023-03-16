const connection = require("../db");
module.exports.getComments = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM comments", (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports.getComment = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM comments WHERE id = ?",
            [id],
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            },
        );
    });
};

module.exports.getCommentsByPost = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT comments.id, comments.user_id, comments.comment as content, comments.created_at as date, users.username FROM comments INNER JOIN users ON comments.user_id = users.id WHERE post_id = ?",
            [id],
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            },
        );
    });
};

module.exports.createComment = (post_id, user_id, parent_id, comment) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO comments (post_id, user_id, parent_id, comment) VALUES (?, ?, ?, ?)",
            [post_id, user_id, parent_id, comment],
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    // return the new comment
                    connection.query(
                        "SELECT comments.id, comments.comment as content, comments.created_at as date, users.username FROM comments INNER JOIN users ON comments.user_id = users.id WHERE comments.id = ?",
                        [results.insertId],
                        (err, results) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(results);
                            }
                        },
                    );
                }
            },
        );
    });
};

module.exports.updateComment = (comment, id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "UPDATE comments SET comment = ? WHERE id = ?",
            [comment, id],
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            },
        );
    });
};

module.exports.deleteComment = (id, user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "DELETE FROM comments WHERE id = ? AND user_id = ?",
            [id, user_id],
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            },
        );
    });
};

module.exports.checkUpvotes = (comment_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM upvotes_comments WHERE comment_id = ?",
            [comment_id],
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            },
        );
    });
};

module.exports.checkUpvote = (comment_id, user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM upvotes_comments WHERE comment_id = ? AND user_id = ?",
            [comment_id, user_id],
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            },
        );
    });
};

module.exports.upvote = (comment_id, user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO upvotes_comments (comment_id, user_id) VALUES (?, ?)",
            [comment_id, user_id],
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            },
        );
    });
};

module.exports.downvote = (comment_id, user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "DELETE FROM upvotes_comments WHERE comment_id = ? AND user_id = ?",
            [comment_id, user_id],
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            },
        );
    });
};
