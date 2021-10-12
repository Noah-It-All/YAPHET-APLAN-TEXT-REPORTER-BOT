const express = require('express');
const path = require('path');
const app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/styles",express.static(__dirname + "/styles"));
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };



const port = process.env.PORT || 8080;


app.post('/send',function(req,res){
  var values = Object.values(req.body)
  var date = values[0]
  var reason = values[1]
  var teacher = values[2]
  var office = values[3]

  Email.send({
      SecureToken : "598166e6-ebac-4b02-a91c-6852511028fe",
      To : "noahunderscore69@googlemail.com",
      From : "noahunderscore69@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
  }).then(
      message => console.log(message)
  );
});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});



app.listen(port);
console.log('Server started at http://localhost:' + port);