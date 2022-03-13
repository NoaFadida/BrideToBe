// Requiring modules
const express = require('express');
const app = express();
const ejs = require('ejs');
var fs = require('fs');

const port = 4000;
app.use( express.static( "public" ) );
// app.use(express.static(__dirname + '/public'));
// Render index.ejs file
app.get('/', function (req, res) {
   
    // Render page using renderFile methodsdsdsss
    ejs.renderFile('view/home.ejs', {}, 
        {}, function (err, template) {
        if (err) {
            throw err;
        } else {
            res.end(template);
        }
    });
});

app.get('/Signin', function (req, res) {
   
    // Render page using renderFile methodsdsdsss
    ejs.renderFile('view/signin.ejs', {}, 
        {}, function (err, template) {
        if (err) {
            throw err;
        } else {
            res.end(template);
        }
    });
});

app.get('/Signup', function (req, res) {
   
    // Render page using renderFile methodsdsdsss
    ejs.renderFile('view/signup.ejs', {}, 
        {}, function (err, template) {
        if (err) {
            throw err;
        } else {
            res.end(template);
        }
    });
});
app.get('/Help', function (req, res) {
   
    // Render page using renderFile methodsdsdsss
    ejs.renderFile('view/help.ejs', {}, 
        {}, function (err, template) {
        if (err) {
            throw err;
        } else {
            res.end(template);
        }
    });
});



function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}


function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
    } else {
      document.getElementById("nextBtn").innerHTML = "Next";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}


   
// Server setup
app.listen(port, function (error) {
    if (error)
        throw error;
    else
        console.log("Server is running");
});


