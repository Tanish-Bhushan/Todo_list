const express = require("express");
const bodyparser = require("body-parser");
var items = [];
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  var today = new Date();
  var options = { weekday: "long", day: "numeric", month: "long" };
  var day = today.toLocaleDateString("en-us", options);
  res.render("list", { kindofday: day, lists: items });
});

app.post("/", function (req, res) {
  var item = req.body.newitem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server is up!");
});
