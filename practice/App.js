const requesthandler = require('../practice/form')
const express = require('express')
const app  =express();
app.use("/",(req,res,next)=>{
res.send('<h1>WELCOME TO HOME</h1>')
next()
})
app.use("/form",(req,res,next)=>{

  
})
const port = 3002
app.listen(port,()=>{
  console.log(`Server is running on ${port}`); 
})