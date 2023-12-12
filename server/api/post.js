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

router.post('/', async (req,res) => {
  if (!req.user) {res.sendStatus(401)} // Give non-users the "non-authorized" boot

  if (req.body){
    try{
      const newPost = await prisma.post.create({
        data: {
          "title":req.body.title,
          "content":req.body.content,
          "userId":req.user.id
        }
      })

    console.log(newPost)
    res.send(newPost);
    }catch(error) {
      res.status(400).send(error)
    }
  } 
  else res.status(500).send(error);
})


////////////////////
///// PUT //////////
////////////////////


////////////////////
///// DELETE ///////
////////////////////


module.exports = router;