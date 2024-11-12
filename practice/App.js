const requesthandler = require('../practice/form')
const http = require('http')
const express = require('express')
const app  =express();
app.use((req,res,next)=>{
  res.send('<h1>Welcome to Express</h1>')
  // next()

})

const server = http.createServer(app)
const port = 3002
server.listen(port,()=>{
  console.log(`Server is running on ${port}`);
  
})