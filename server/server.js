const express = require('express')
const app = express()

const PORT = 3001

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
