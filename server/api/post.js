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

// route "api/post/" --> Get all posts
router.get('/', async (req, res) => {
  try{
    const posts = await prisma.post.findMany();
    res.send(posts);
  } catch(error){
    res.status(400).send
    console.log(error)
  }
})

// route "api/post/:id" --> Get one post
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


// route "api/post/user/:id" --> Get all posts from a user
router.get('/user/:id', async (req, res) => {
  const userId = parseInt(req.params.id)

  try{
  const userPosts = await prisma.post.findMany({
    where: {
      userId: userId,
    }
  })
  res.send(userPosts || {})

  } catch(error){
    res.status(400).send
  }
})


////////////////////
///// CREATE ///////
////////////////////

// route "api/post/" --> Create a new post
router.post('/', async (req,res) => {
  // Give non-users the "non-authorized" boot
  if (!req.user) {res.sendStatus(401); 
    return}
  
  // Only users here
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

// route "api/post/:id" --> Update a post by post id
router.put('/:id', async (req,res) => {
  if (!req.user) {res.sendStatus(401); 
    return} // Give non-users the "non-authorized" boot

  const postId = parseInt(req.params.id)
  const postBody = req.body

  try{
    const updatedPost = await prisma.post.update({
      where:{
        id: postId,
      },
      data:postBody,
    })

    res.send(updatedPost)
  } catch(error) {
    res.sendStatus(400);
  }

})

////////////////////
///// DELETE ///////
////////////////////

// route "api/post/:id" --> Delete a post by post id
router.delete('/:id', async (req,res) => {
  if (!req.user) {res.sendStatus(401); 
    return} // Give non-users the "non-authorized" boot

  const postId = parseInt(req.params.id)
  
  try{
    const deletedPost = await prisma.post.delete({
      where:{
        id: postId,
      }
    })

    res.send(deletedPost)
  } catch(error) {
    res.sendStatus(400);
    // res.send(error)
  }

})





module.exports = router;