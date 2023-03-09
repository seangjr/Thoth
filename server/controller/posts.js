const postsModel = require("../model/posts");

module.exports.getPosts = (res) => {
    postsModel
        .getPosts()
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.getPost = (req, res) => {
    const id = req.params.id;
    postsModel
        .getPost(id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.getPostByUser = (req, res) => {
    const { user_id } = req.params;
    postsModel
        .getPostByUser(user_id)
        .then((result) => {
            res.json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.createPost = (req, res) => {
    const { title, content, user_id } = req.body;
    postsModel
        .createPost(title, content, user_id)
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.updatePost = (req, res) => {
    const { id } = req.params;
    const { title, content, user_id } = req.body;
    postsModel
        .updatePost(id, title, content, user_id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.deletePost = (req, res) => {
    const { id, user_id } = req.body;
    postsModel
        .deletePost(id, user_id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};
