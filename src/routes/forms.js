/*
 * Name:        forms.js
 * Description: Route handlers for displaying and submitting booking forms
 * Author:      NicMac
 * Date:        January 11, 2025
 */

// Importing Express modules
const express = require('express');
const bodyParser = require('body-parser');

// Importing the buildForm function from the bookingForm module
const {buildForm} = require('../models/bookingForm');

// Creating an instance of an Express router
const router = express.Router();

// Middleware to parse JSON & URL-encoded bodies
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

// Route to display the booking form
router.get('/', (req, res) => {
    console.log("hello from the form route");
    let html = buildForm();
    res.render("index", {html});
});

// Route to handle form submission
router.post('/', (req, res) => {

    // Get user input data from the form
    const {fname, lname, phone, email, checkin, checkout, roomType} = req.body;

    // Create a user input object
    let userInput = {
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        checkin: checkin,
        checkout: checkout,
        roomType: roomType
    };

    // Import function to validate user input
    const {validateForm} = require('../validation/auth');

    // Validate user input
    let isValid = validateForm(userInput);

    if (isValid) {

    } else {
        res.send('!!!invalid!!!');
    }

    res.send(
            'first name: ' + fname + '<br>' +
            'last name: ' + lname + '<br>' +
            'phone: ' + phone + '<br>' +
            'email: ' + email + '<br>' +
            'check in: ' + checkin + '<br>' +
            'check out: ' + checkout + '<br>' +
            'room type: ' + roomType);
});

// Exporting the router module so it can be used in other files
module.exports = router;