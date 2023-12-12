const router = require("express").Router();

router.use('/', (req, res) => {
  res.send('hello, api/post here');
})

module.exports = router;