const connection = require("../db");
module.exports.getPosts = () => {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT posts.id, posts.title, posts.content, posts.user_id, posts.created_at, posts.tags, users.username FROM posts INNER JOIN users ON posts.user_id = users.id",
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

module.exports.createPost = (title, content, tags, user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO posts (title, content, tags, user_id) VALUES (?, ?, ?, ?)",
            [title, content, tags, user_id],
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

module.exports.updatePost = (title, content, tags, id, user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "UPDATE posts SET title = ?, content = ?, tags = ? WHERE id = ? AND user_id = ?",
            [title, content, tags, id, user_id],
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

module.exports.checkUpvotes = (post_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM upvotes_posts WHERE post_id = ?",
            [post_id],
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

module.exports.checkUpvote = (post_id, user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM upvotes_posts WHERE post_id = ? AND user_id = ?",
            [post_id, user_id],
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

module.exports.upvote = (post_id, user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO upvotes_posts (post_id, user_id) VALUES (?, ?)",
            [post_id, user_id],
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

module.exports.downvote = (post_id, user_id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "DELETE FROM upvotes_posts WHERE post_id = ? AND user_id = ?",
            [post_id, user_id],
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
