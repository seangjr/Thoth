const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
    const auth = req.header("Authorization");
    if (auth && auth.startsWith("Bearer ")) {
        jwt.verify(
            auth.replace("Bearer ", ""),
            "weirdsecret",
            (err, result) => {
                if (result) {
                    req.payload = result;
                    next(); // continue to next middleware
                } else {
                    res.status(401).end("Unauthorized");
                }
            },
        );
    } else {
        res.status(401).end("Unauthorized");
    }
};
