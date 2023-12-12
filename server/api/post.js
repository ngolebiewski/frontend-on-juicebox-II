const { PrismaClient } = require("@prisma/client");

const router = require("express").Router();
const prisma = new PrismaClient()

// // Used to test the route when first setting up server routes
// router.use('/', (req, res) => {
//   res.send('hello, api/post here');
// })


////////////////////
///// GET //////////
////////////////////

// route "api/post/" --> Get all posts!
router.get('/', async (req, res) => {
  try{
    const posts = await prisma.post.findMany();
    res.send(posts);
  } catch(error){
    res.status(400).send
    console.log(error)
  }
})

// route "api/post/:id" --> Get one post!
router.get('/:id', async (req, res) => {
  const postId = parseInt(req.params.id)

  try{
  const onePost = await prisma.post.findUnique({
    where: {
      id: postId,
    }
  })
  res.send(onePost || {})

  } catch(error){
    res.status(400).send
  }
})


////////////////////
///// CREATE ///////
////////////////////


////////////////////
///// PUT //////////
////////////////////


////////////////////
///// DELETE ///////
////////////////////


module.exports = router;