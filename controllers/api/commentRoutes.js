const router = require("express").Router();
const { Comment } = require("../../models");

// Creating a new comment
router.post("/:userid/:postid", async (req, res) => {
    try {
        const newComment = await Comment.create({
            user_id: req.params.user_id,
            post_id: req.params.post_id,
            content: req.body.content
        });
        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;