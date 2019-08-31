var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require('path');
var app = express();
mongoose.connect("mongodb://localhost/etch-app",{ useNewUrlParser: true });
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var Schema = mongoose.Schema;

var sketchSchema = new Schema({
    pix_array: [],
    created: {type: Date, default: Date.now},
});

var Sketch = mongoose.model("Sketch", sketchSchema);
var sketch = {
    array: []
}
app.get("/", function(req, res){
    res.render("home",{sketch: sketch});
});

app.post("/save", function(req, res){
    console.log("array in the route is equal to ", req.body.array);
    var array = req.body.array;
    var newSketch = {array: array}
    Sketch.create(newSketch, function(err, newSketch){
        if(err){
            console.log(err);
        } else {
            console.log("sketch saved!!!!")
            res.send("sketch saved!!!");
        }
    });
});

app.listen(3000, function(){
    console.log("It's alllliiiiiiive!!");
});