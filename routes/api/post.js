const express = require("express");

const router = express.Router();

// @route GET api/profile
// @desc Test Profile
// @access Public

router.get("/", (req, res) => res.send("Post Route"));

module.exports = router;
