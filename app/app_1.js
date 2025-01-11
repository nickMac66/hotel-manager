/*
 * Name:        server.js
 * Description: Express server setup for serving static files and handling routes
 * Author:      NicMac
 * Date:        November 23, 2024
 */

// server.js
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const index = path.resolve(__dirname, '../views/index.ejs');

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Middleware to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Defining a route for handling client communication
app.get('/', (req, res) => {
    console.log("hello from the server");
    const {buildForm} = require('../src/models/bookingForm');
    let html = buildForm();
    res.render("index", {html});
});

app.post('/', (req, res) => {
    
    // Import the form validation function
    const {validateForm} = require('../src/validation/auth');
    
    // Get user input data from the form
    const fname = req.body.fname;
    const lname = req.body.lname;
    const phone = req.body.phone;
    const email = req.body.email;
    const checkin = req.body.checkin;
    const checkout = req.body.checkout;
    const roomType = req.body.roomType;

    // Add the user input data to an array
    let userInput = {
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        checkin: checkin,
        checkout: checkout,
        roomType: roomType
    };

    // Validate user input data
    let validForm = validateForm(userInput);

    // Connect to the database and add user input
    if (validForm) {        
        console.log("...valid data...");
        
        // Connect to the database
        const {dbConnect} = require('../src/models/db/dbConnection');
        const connection = dbConnect();
        
    } else {
        console.log("!!!invalid data!!!");
    }
});

// Serving static files (HTML, CSS, JS)
app.use(express.static('public'));
app.use('/src', express.static(path.join(__dirname, 'src/validation')));


// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


