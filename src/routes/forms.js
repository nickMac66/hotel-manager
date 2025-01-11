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
    console.log("first name:", fname);
    console.log("last name:", lname);
    console.log("phone:", phone);
    console.log("email:", email);
    console.log("checkin:", checkin);
    console.log("checkout:", checkout);
    console.log("room type:", roomType);
    res.send('Form submitted successfully');
});

// Exporting the router module so it can be used in other files
module.exports = router;