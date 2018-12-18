const express = require('express')
const app = express()

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var messages = []
var id_courant = 3;

function loadMessages(){
    messages.push({"id": "MSGID_2","title": "Marc", "body": "Salut Paul, comment tu vas ?"})
    messages.push({"id": "MSGID_1","title": "Paul", "body": "Plutôt bien et toi ?"})
}

app.get('/getMessages', function (req, res) {
  res.json(messages)
})

app.post('/removeMessage', function(req, res){
  for(var m in messages){
    if(messages[m].id == req.body.id)
      messages.splice(m, 1)
  }
  res.send(messages)
})

app.post('/addMessage', function(req, res){
    messages.unshift({"id": "MSGID_"+id_courant, "date": req.body.date, "title": req.body.title, "body": req.body.body})
    id_courant++;
    res.send(messages)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
  loadMessages()
})  


