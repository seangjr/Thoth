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

module.exports.createComment = (post_id, user_id, content) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)",
            [post_id, user_id, content],
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
