const connection = require("../db");
module.exports.getPosts = () => {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT posts.id, posts.title, posts.content, posts.user_id, posts.upvotes, posts.created_at, posts.tags, users.username FROM posts INNER JOIN users ON posts.user_id = users.id",
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

module.exports.getPost = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM posts WHERE id = ?",
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

module.exports.getPostByUser = (user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM posts WHERE user_id = ?",
            [user_id],
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

module.exports.createPost = (title, content, user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)",
            [title, content, user_id],
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

module.exports.updatePost = (id, title, content, user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "UPDATE posts SET title = COALESCE(?, title), content = COALESCE(?, content) WHERE id = ? AND user_id = ?"[
                (title, content, id, user_id)
            ],
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

module.exports.deletePost = (id, user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "DELETE FROM posts WHERE id = ? AND user_id = ?",
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
            "UPDATE posts SET upvotes = upvotes + 1 WHERE id = ?",
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
            "UPDATE posts SET upvotes = upvotes - 1 WHERE id = ?",
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
