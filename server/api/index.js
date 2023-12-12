const router = require("express").Router();

router.use('/post', require('./post.js'));

router.use('/', (req, res) => {
  res.send('hello, api here');
})

module.exports = router;