const express = require('express')
const router = express.Router()
const { PrismaClient } = require('@prisma/client')
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient()
const saltRounds = 7; //I still like prime numbers


// route: "auth/register"
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
  res.send(error);
}}
)

// route: "auth/login"
router.post('/login', async (req, res) =>{
  try{
    const user = await prisma.user.findUnique({
    where: {
      username: req.body.username
    }
  })

  if (!user) {
    res.sendStatus(401);
  }

  const checkedPassword = await bcrypt.compare(req.body.password, user.password);

  if (checkedPassword) {
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
    res.send(token)
  } else {
    res.sendStatus(401);
  }

} catch(error){
  res.sendStatus(401);
}

})


module.exports = router;