var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var app = express();

app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("home");
});

app.listen(3000, function(){
    console.log("It's alllliiiiiiive!!");
});