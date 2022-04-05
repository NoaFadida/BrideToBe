// Requiring modules
const express = require("express");
const app = express();
const ejs = require("ejs");
const port = process.env.PORT || 4000;


app.use(express.static("public"));
// app.use(express.static(__dirname + '/public'));
// Render index.ejs file
app.get("/", function (req, res) {
  // Render page using renderFile methodsdsdsss
  ejs.renderFile("view/home.ejs", {}, {}, function (err, template) {
    if (err) {
      throw err;
    } else {
      res.end(template);
    }
  });
});

// Server setup
app.listen(port, function (error) {
  if (error) throw error;
  else console.log("Server is running");
});

app.get("/Signin", function (req, res) {
  // Render page using renderFile methodsdsdsss
  ejs.renderFile("view/signin.ejs", {}, {}, function (err, template) {
    if (err) {
      throw err;
    } else {
      res.end(template);
    }
  });
});

app.get("/Signup", function (req, res) {
  // Render page using renderFile methodsdsdsss
  ejs.renderFile("view/signup.ejs", {}, {}, function (err, template) {
    if (err) {
      throw err;
    } else {
      res.end(template);
    }
  });
});

app.get("/AboutUs", function (req, res) {
  // Render page using renderFile methodsdsdsss
  ejs.renderFile("view/about.ejs", {}, {}, function (err, template) {
    if (err) {
      throw err;
    } else {
      res.end(template);
    }
  });
});
