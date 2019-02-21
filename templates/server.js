const express = require("express");
const path = require('path');
const app = new express();

//app.use(express.static(__dirname + '/public'));
app.get("/", function(req, resp) {
  resp.sendFile(path.resolve(__dirname + '/public', 'index.html'));
});
app.get("/public/app.js", function(req, resp) {
  resp.sendFile(path.resolve(__dirname + '/public/', 'app.js'));
});
app.listen("80");