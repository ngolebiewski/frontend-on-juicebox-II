const { PrismaClient } = require("@prisma/client");

const router = require("express").Router();
const prisma = new PrismaClient()

// // Used to test the route when first setting up server routes
// router.use('/', (req, res) => {
//   res.send('hello, api/post here');
// })

// route "api/post/" --> Get all posts!
router.get('/', async (req, res) => {
  try{
  const posts = await prisma.post.findMany();
  res.send(posts);
  } catch(error){
    res.statusSend(400)
    console.log(error)
  }
})


module.exports = router;