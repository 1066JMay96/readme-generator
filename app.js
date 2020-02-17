const express = require('express');
const app = express();

const fileUtil = require('./file-util')
app.get('/api/notes', function(req,res){
 res.send(fileUtil.readFile())
})

app.post('/api/notes',function(req,res){
  const data = req.body;
  fileUtil.writeFile(data)
  res.send(data)
})


app.get('/notes', function(req,res){
  res.sendFile(__dirname + "/notes.html")
})


app.get('*', function(req,res){
  res.sendFile(__dirname + "/index.html")
})



app.listen(8080,function(){
  console.log('listening on PORT 8080')
})