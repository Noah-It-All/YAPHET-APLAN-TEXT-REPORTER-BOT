const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/styles",express.static(__dirname + "/styles"));

const port = process.env.PORT || 8080;

app.post('/send',function(req,res){
  var values = Object.values(req.body)
  res.send(values)
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});



app.listen(port);
console.log('Server started at http://localhost:' + port);