const express = require('express');
const router = express.Router();

// @route   GET api/posts
// @desc    Test route
// @access  Public //if you need to auth to get, then it's private, else public
router.get('/', (req, res) => res.send('posts route'));

module.exports = router;
