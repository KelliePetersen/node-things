var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.send("Hi there!");
});

app.get("/posts", function(req, res) {
  var posts = [
    {title: "Post 1", author: "Sally"},
    {title: "Post 2", author: "Sammy"},
    {title: "Post 3", author: "Billy"},
  ];
  res.render("posts.ejs", {posts: posts});
});

app.get("/custom/:word", function(req, res) {
  var word = req.params.word;
  res.render("custom.ejs", {customWord: word});
});

app.get("/r/:title/", function(req, res){
  var title = req.params.title;
  res.send("Variable page for " + title);
});

app.get("*", function(req, res) {
  res.send("This is not a valid page");
});

var port = 3000;

app.listen(port, function() {
  console.log("Server has started on " + port);
});