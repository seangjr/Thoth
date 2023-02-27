const userModel = require("../model/users");
const jwt = require("jsonwebtoken");

module.exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    userModel
        .loginUser(email, password)
        .then((result) => {
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

module.exports.verify = (req, res) => {
    res.status(200).json(req.payload); // payload is the user object
};

module.exports.registerUser = (req, res) => {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
        res.status(400).end("Missing required fields.");
    } else {
        userModel.checkUser(email).then((result) => {
            if (result.length >= 1) {
                res.status(409).end("User already exists."); // 409 conflict
            } else {
                userModel
                    .registerUser(username, email, password)
                    .then((result) => {
                        res.status(201).json(result);
                    })
                    .catch((err) => {
                        res.status(500).end(err);
                    });
            }
        });
    }
};
