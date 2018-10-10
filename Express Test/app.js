var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("welcome to website");
});

app.get("/speak/:animal/", function(req, res){
  var noises = {
    dog: 'Woof',
    pig: 'Oink',
    cow: 'Moo',
    duck: 'Quack'
  };
  var animal = req.params.animal;
  var noise = noises[animal];
  if (noise) {
    res.send(`The ${animal} says ${noise}`);
  } else {
    res.send("Are you sure that's an animal?");
  }
});

app.get("/repeat/:phrase/:count/", function(req, res) {
  let phrase = req.params.phrase + " ";
  res.send(phrase.repeat(req.params.count).trim());
});

app.get("*", function(req, res) {
  res.send("Page not found");
});

app.listen(3000, function() {
  console.log("Server has started");
});