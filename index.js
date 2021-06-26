const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const ObjectId = require('mongodb').ObjectId
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Sadiq:10820147@cluster0.u16ta.mongodb.net/Podcast?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("Podcast").collection("User");
  client.close();
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "./index.html")
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000);
