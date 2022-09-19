const { Socket }=require('dgram')
const express = require('express')
const app=express()
const http=require('http').createServer(app)
app.set('view engine','ejs');
app.use(express.static('public'));
app.get("/",(req,res)=>{
  res.render('index');
})
http.listen(3000, ()=>{
    console.log("server is Running")
})

const io=require('socket.io')(http)
io.on('connection',(socket)=>{
  console.log('connected')
  socket.on('message',(msg)=>{
    socket.broadcast.emit('message',msg)
  })
})