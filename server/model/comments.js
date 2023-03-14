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

module.exports.createComment = (post_id, user_id, parent_id, content) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO comments (post_id, user_id, parent_id, content) VALUES (?, COALESCE(?, parent_id), ?)",
            [post_id, user_id, parent_id, content],
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
