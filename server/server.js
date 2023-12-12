const express = require('express')
const app = express()
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
require("dotenv").config();

const PORT = 3000

//logging middleware 
app.use(morgan("dev"));

///middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Tyler's Tolkein-a-tizer Middle(Earth)ware --> so many Hobbit jokes made on Monday 12/11/23! 
app.use((req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth?.startsWith("Bearer ") ? auth.slice(7) : null;
  try { req.user = jwt.verify(token, process.env.JWT_SECRET);} 
  catch { req.user = null;}

  //Log the current user
  console.log("USER: ", req.user);

  next();
});

//API routes
app.use('/auth', require('./auth/index.js'));
app.use('/api', require('./api/index.js'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


//Tyler's Tolkein-a-tizer Middle(Earth)ware --> so many hobbit jokes made on Monday, 12/11/23 --So good should be an NPM package!
// app.use((req, res, next) => {
//   const auth = req.headers.authorization;
//   if (!auth) {const token = null};
//   if (auth && auth.startsWith("Bearer")) {
//     const token = auth.slice(7)
//   }
//   try { req.user = jwt.verify(token, process.env.JWT_SECRET);} 
//   catch { req.user = null;}

//   //Log the current user
//   console.log("USER: ", req.user);

//   next();
// });