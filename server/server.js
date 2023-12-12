const express = require('express')
const app = express()
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
require("dotenv").config();


const PORT = process.env.PORT || 3000;

//logging middleware 
app.use(morgan("dev"));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Token Middleware
  //Based on Tyler's Tolkein checker Middle(Earth)ware --> so many Hobbit jokes made on Monday 12/11/23! 
app.use((req, res, next) => {
  const bearerInfo = (req.headers.authorization)

  if (!bearerInfo) req.user = null;

  else if (bearerInfo.includes("Bearer ")) {
    const tokenSplit = bearerInfo.split("Bearer ");
    const token = tokenSplit[1]
    try {req.user = jwt.verify(token, process.env.JWT_SECRET)}
    catch(error) {req.user = null};
  }

  else req.user = null;

  console.log("USER: ", req.user);
  next()
});

//API routes
app.use('/auth', require('./auth/index.js'));
app.use('/api', require('./api/index.js'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('<h1>Juicebox Blog API</h1>')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
