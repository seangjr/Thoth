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
            "SELECT comments.id, comments.comment as content, comments.upvotes, comments.created_at as date, users.username FROM comments INNER JOIN users ON comments.user_id = users.id WHERE post_id = ?",
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
                    resolve(results);
                }
            },
        );
    });
};

module.exports.deleteComment = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "DELETE FROM comments WHERE id = ?",
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

module.exports.upvote = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "UPDATE comments SET upvotes = upvotes + 1 WHERE id = ?",
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

module.exports.downvote = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "UPDATE comments SET downvotes = downvotes + 1 WHERE id = ?",
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
