const express = require("express");

const router = express.Router();

// @route GET api/Profile
// @desc Test Route
// @access Public

router.get("/", (req, res) => res.send("Profile Route"));

module.exports = router;
