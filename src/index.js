// Requiring modules
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { hash, compare } = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");

const Client = require("../models/client.js");
const HttpError = require("../utils/HttpError");
const { errorMessages } = require("../utils/constants");



const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static("public"));

const port = process.env.PORT || 4000;


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

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.sgyui.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(port, function (error) {
      if (error) console.error(error);
      else console.log("Server is running with mongoDB");
    });
  }).catch((err) => console.error(err));



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



app.post("/client-signup", async (req, res, next) => {

  const { full_name, phone_number, email, address: adress, username, password } = req.body;
  
  try {
    const isUserExists = await Client.findOne({ email }).exec();

    if (isUserExists) {
      return next(new HttpError(errorMessages.USER_ALREADY_EXSITS_ERROR, 404));
    }

    // hashing password
    let hashPassword;
    try {
      hashPassword = await hash(password, 10);
    } catch (err) {
      return next(new HttpError(errorMessages.INTERNAL_SERVER_ERROR, 500));
    }
     
    // creatinn user document with mongoose scheme
    const new_client = new Client({
      full_name,
      phone_number,
      email,
      adress,
      username,
      password: hashPassword
    });

    const createdUser = await new_client.save()

  } catch (err) {
    return new HttpError(errorMessages.INTERNAL_SERVER_ERROR);
  }

  res.status(200).json("User created");

});



app.post("/client-login", async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  // validation
  // fill
  try {
    const userExists = await Client.findOne({ email }).exec();
    
    // found no client
    if (!userExists) {
      res.status(401).json("Email or password incorrect!");
    }

    // password hashing and comparing
    let isPassowrdsEquals;
    try {
      isPassowrdsEquals = await compare(password, userExists.password);
    } catch (err) {
      return next(new HttpError(errorMessages.INTERNAL_SERVER_ERROR, 500));
    }

    if (!isPassowrdsEquals) {
      res.status(401).json("Email or password incorrect!");
    }

    // create jwt for auth user with user id 
    let token;
    try {
      token = await jwt.sign({ id: userExists._id }, process.env.JWT_SECRET );
    } catch (err) {
      return next(new HttpError(errorMessages.INTERNAL_SERVER_ERROR, 500));
    }
    // res.json({ token });
    res.status(200).json("User logged in!");
  } catch (err) {
    return next(new HttpError(errorMessages.INTERNAL_SERVER_ERROR, 500));
  }
});