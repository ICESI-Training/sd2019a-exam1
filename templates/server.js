const express = require("express");
const path = require('path');
const app = new express();

app.use(express.static(__dirname + '/public'));

app.listen("80");