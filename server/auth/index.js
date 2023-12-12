const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient()
const saltRounds = 7; //I still like prime numbers


// router.use('/', (req, res) => {
//   res.send('hello, auth here');
// })

router.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    const result = await prisma.user.create({
      data: {
        "username":req.body.username,
        "password":hashedPassword,
      }
    })
    
    const token = jwt.sign({ id: result.id }, process.env.JWT_SECRET);
    res.send(token)

} catch(error){
  //to do get a better error
  res.send(error)
}}
)

router.post('/login', async (req, res) =>{

})


module.exports = router;