module.exports = (req, res, next) => {
    if (req.payload.role == "admin") {
        next();
    } else {
        res.status(401).end("Unauthorized");
    }
};
