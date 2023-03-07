const connection = require("../db");
module.exports.loginUser = (email, password) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM users WHERE email = ? AND password = ?",
            [email, password],
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

module.exports.getUsers = () => {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM users", (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

module.exports.getUser = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM users WHERE id = ?",
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

module.exports.registerUser = (username, email, password) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            [username, email, password],
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

module.exports.updateUser = (id, username, email) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "UPDATE users SET COALESCE(username, ?), COALESCE(email, ?) WHERE id = ?",
            [(username, email, id)],
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

module.exports.updateUserPassword = (id, newPassword, oldPassword) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "UPDATE users SET COALESCE(password, ?) WHERE id = ? AND password = ?",
            [(newPassword, id, oldPassword)],
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

module.exports.deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "DELETE FROM users WHERE id = ?",
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

module.exports.checkUser = (email) => {
    return new Promise((resolve, reject) => {
        connection.query(
            "SELECT * FROM users WHERE email = ?",
            [email],
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
