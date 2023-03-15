const postsModel = require("../model/posts");

module.exports.getPosts = (req, res) => {
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
    const { title, content, tags, user_id } = req.body;
    postsModel
        .createPost(title, content, tags, user_id)
        .then((result) => {
            res.status(201).json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.updatePost = (req, res) => {
    const { id } = req.params;
    const { title, content, tags, user_id } = req.body;
    postsModel
        .updatePost(title, content, tags, id, user_id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.deletePost = (req, res) => {
    const { id, user_id } = req.params;
    postsModel
        .deletePost(id, user_id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.checkUpvotes = (req, res) => {
    const { id } = req.params;
    postsModel
        .checkUpvotes(id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.checkUpvote = (req, res) => {
    const { post_id, user_id } = req.params;
    postsModel
        .checkUpvote(post_id, user_id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.upvote = (req, res) => {
    const { post_id, user_id } = req.body;
    postsModel
        .upvote(post_id, user_id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};

module.exports.downvote = (req, res) => {
    const { post_id, user_id } = req.body;
    postsModel
        .downvote(post_id, user_id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            res.status(500).end(err.toString());
        });
};
