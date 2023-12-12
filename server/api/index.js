const router = require("express").Router();

// Although routing to only one location, setting up this way for the time that this API expands
// and includes tags, etc. 
router.use('/post', require('./post.js'));

module.exports = router;