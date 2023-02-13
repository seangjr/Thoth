const userModel = require("../model/users");
const jwt = require("jsonwebtoken");
// hash library

module.exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    userModel
        .loginUser(email, password)
        .then((result) => {
            // use hashing library
            const user = result[0];
            if (user) {
                // create token
                jwt.sign(
                    user,
                    "weirdsecret",
                    { expiresIn: "1d" },
                    (err, token) => {
                        if (token) {
                            res.json({ token, ...user });
                        } else {
                            res.status(500).end(err);
                        }
                    },
                );
            } else {
                res.status(401).end("Invalid credentials");
            }
        })
        .catch((err) => {
            res.status(500).end(err);
        });
};
