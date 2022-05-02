// Requiring modules
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { hash, compare } = require("bcrypt");
const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
// const methodOverride = require('method-override');
// const session = require("express-session");
// const flash = require("connect-flash");
// const passport = require('passport');
// const LocalStrategy = require('passport-local');


const Client = require("../models/client.js");
const HttpError = require("../utils/HttpError");


const app = express();
app.set('view engine', 'ejs');


// Body parser
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// app.use(methodOverride('_method'));
// app.use(express.static(path.join(__dirname, 'public')))

// const sessionConfig = {
//   secret: 'thisshouldbeabettersecret!',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//       httpOnly: true,
//       expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//       maxAge: 1000 * 60 * 60 * 24 * 7
//   }
// }

// app.use(session(sessionConfig))
// app.use(session(sessionOptions));

app.use(express.static("public"));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(Client.authenticate()));

// passport.serializeUser(Client.serializeUser());
// passport.deserializeUser(Client.deserializeUser());

// app.use((req, res, next) => {
//     console.log(req.session)
//     res.locals.currentUser = req.Client;
//     res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
//     next();
// })


app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
})


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

  const { full_name, phone_number, email, password } = req.body;
  
  try {
    const isUserExists = await Client.findOne({ email: email.toLowerCase().trim() }).exec();

    if (isUserExists) {
      res.status(400).json("user already exists");
      return;
    }

    // hashing password
    let hashPassword;
    try {
      hashPassword = await hash(password, 10);
    } catch (err) {
      res.status(500).json({msg: "hash passwrod error", err})
        // return next(new HttpError(errorMessages.INTERNAL_SERVER_ERROR, 500));
    }
     
    // creatinn user document with mongoose scheme
    const new_client = new Client({
      full_name: full_name.toLowerCase().trim(),
      phone_number,
      email: email.toLowerCase().trim(),
      password: hashPassword
    });
    
    const createdUser = await new_client.save()
    // req.flash('success', 'Welcome to Yelp Camp!');
    // res.redirect('/Signup');

    console.log(">> User created")
    res.status(200).json({ user: createdUser, msg: "Success" });

  } catch (err) {
    res.status(500).json({msg: "Error creating user", err})
  }
});



app.post("/client-login", async (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
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
      res.status(500).json("Error");
    }
    // res.json({ token });
    res.status(200).json("User logged in!");
  } catch (err) {
    res.status(500).json({msg: "Error ", err})
  }
});


