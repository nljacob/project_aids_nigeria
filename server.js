require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const mongoose = require('mongoose');
const morgan = require('morgan'); // used to see requests
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3001;

// NEXT THREE THINGS ADDED FOR NODEMAILER
var router = express.Router();
var nodemailer = require('nodemailer');
const creds = require('./config/config');

// Setting CORS so that any website can
// Access our API
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
  next();
});

//log all requests to the console
app.use(morgan('dev'));

// Setting up bodyParser to use json and set it to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/appDB');

// Init the express-jwt middleware
const isAuthenticated = exjwt({
  secret: 'all sorts of code up in here'
});

// NODEMAILER STUFF STARTS HERE
var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
// NODEMAILER STUFF ENDS HERE

// LOGIN ROUTE
app.post('/api/login', (req, res) => {
  db.User.findOne({
    email: req.body.email
  }).then(user => {
    user.verifyPassword(req.body.password, (err, isMatch) => {
      if(isMatch && !err) {
        let token = jwt.sign({ id: user._id, email: user.email }, 'all sorts of code up in here', { expiresIn: 129600 }); // Sigining the token
        res.json({success: true, message: "Token Issued!", token: token, user: user});
      } else {
        res.status(401).json({success: false, message: "Authentication failed. Wrong password."});
      }
    });
  }).catch(err => res.status(404).json({success: false, message: "User not found", error: err}));
});

// SIGNUP ROUTE
app.post('/api/signup', (req, res) => {
  db.User.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.status(400).json(err));
});

// SAVE NEW SPONSOR APPLICATION AND TEST SCORES
app.post('/api/certification', (req, res) => {
  db.Certification.create(req.body)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// FIND ALL APPLICATIONS/TEST SCORES SUBMITTED TO GET CERTIFIED PG
app.get('/api/certification', (req, res) => {
  db.Certification.find({})
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

// Any route with isAuthenticated is protected and you need a valid token
// to access
app.get('/api/user/:id', isAuthenticated, (req, res) => {
  db.User.findById(req.params.id).then(data => {
    if(data) {
      res.json(data);
    } else {
      res.status(404).send({success: false, message: 'No user found'});
    }
  }).catch(err => res.status(400).send(err));
});

//== v James 5/21/18 v ==

app.use('/assets', express.static(path.resolve('step-3/assets'), { maxAge: '30 days' }));

app.get('/writings', (req, res) => {
	db.Writings.find((err, writings) => {
		if (err) return res.status(500).send(err);

		res.send(writings);
	});
});

app.post('/writings', (req, res) => {
  
  newWritings = db.Writings.create(req.body)
  .then(data => res.json(data))
  .catch(err => res.status(400).json(err));


});

//== ^ ^ ==

// ADD NEW MAILER ROUTE HERE
app.post('/api/send', (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  let myMessage = req.body.message;

  console.log(myMessage);

  var content = `name: ${name} \n email: ${email} \n message: ${myMessage}`;

  console.log(content);

  var mail = {
    from: name,
    to: creds.USER,  //Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
});
// NEW NODEMAILER ROUTE ENDS HERE

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get('/', isAuthenticated /* Using the express jwt MW here */, (req, res) => {
  res.send('You are authenticated'); //Sending some response when authenticated
});

// Error handling
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
    res.status(401).send(err);
  }
  else {
    next(err);
  }
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
