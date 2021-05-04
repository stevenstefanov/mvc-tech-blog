// Declare dependencies
const router = require("express").Router();
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

// Set up routes
router.use("/users", userRoutes);
router.use("/posts", postRoutes);

// Exports
module.exports = router;
