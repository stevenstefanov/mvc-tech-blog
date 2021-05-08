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


// This deletes a comment by its specific id
router.delete("/:id", async (req, res) => {
    try {
        const deletedComment = await Comment.destroy({
                where: { id: req.params.id }
        });
        res.status(200).json(deletedComment);
    } catch (err) {
        res.status(400).json(err);
    }
})

module.exports = router;