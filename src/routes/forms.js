// Import express module and create Express server
const express = require('express');

// Importing the path module for working with file and directory paths
const path = require('path');

// Resoloving the path to the index.ejs view file
const index = path.resolve(__dirname, '../views/index.ejs');

// Creating Express router
const router = express.Router();

// Importing the body-parser module to parse request bodies
const bodyParser = require('body-parser');

// Middleware to parse JSON-encoded bodies
router.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
router.use(bodyParser.urlencoded({extended: true}));

// Importing the buildForm function from the bookingForm module
const {buildForm} = require('../models/bookingForm');

// Route to display the booking form
router.get('/', (req, res, next) => {
    console.log("hello from the form route");
    let html = buildForm();
    res.render("index", {html});
});

router.post('/', (req, res, next) => {
    console.log("...form submitted...");
    // Get user input data from the form
    const fname = req.body.fname;
    console.log("first name: " + fname);
    const lname = req.body.lname;
    console.log("last name: " + lname);
    const phone = req.body.phone;
    console.log("phone: " + phone);
    const email = req.body.email;
    console.log("email: " + email);
    const checkin = req.body.checkin;
    console.log("checkin: " + checkin);
    const checkout = req.body.checkout;
    console.log("checkout: " + checkout);
    const roomType = req.body.roomType;
    console.log("room type: " + roomType);
});

// Exporting the router module so it can be used in other files
module.exports = router;