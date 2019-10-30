const express = require('express');
const router = express.Router();

// @route   GET api/Profile
// @desc    Test route
// @access  Public //if you need to auth to get, then it's private, else public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
