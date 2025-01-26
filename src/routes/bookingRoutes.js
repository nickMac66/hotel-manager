/*
 * Name:        forms.js
 * Description: Route handlers for displaying and submitting booking form
 * Author:      NicMac
 * Date:        January 11, 2025
 */

// Import Express modules
const express = require('express');
const bodyParser = require('body-parser');
const {body, validationResult} = require('express-validator');

// Import functions
const {buildForm} = require('../models/bookingForm');
const {formValidationRules, validate} = require('../validation/auth');

// Create express router
const router = express.Router();

// Middleware to parse JSON & URL-encoded bodies
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

// Reference to the booking form
const bookingForm = buildForm();

//******************************************************************************
// Routes
//******************************************************************************

/**
 * Main page
 * This route handles rendering the main page of the application.
 * It constrcuts the HTML content for the page.
 */
router.get('/', (req, res) => {
    const menu = `
    <div class="header-container">
        <h1>Hotel Booking Form</h1>
        <div class="dropdown">
            <button id="menuButton" class="dropbtn"><i class="fa fa-bars"></i></button>
            <div id="myDropdown" class="dropdown-content">
                <a href="#">Link 1</a>
            </div>
        </div>
    </div>
`;

    // Populate the home page
    res.render("index", {html: bookingForm, menu});
});

/**
 *  Booking form submission
 *  This route handles the submission of the hotel booking form. 
 *  It collects user inputs from the form fields, processes the data,
 *  and inserts it into the database.
 */
router.post('/booking', formValidationRules(), validate, (req, res) => {

    // Import function to connect to the database
    const {dbConnect} = require('../models/db/dbConnection');

    // Import function to display booking details
    const {displayBooking} = require('../../public/bookingDetails');

    // User input
    const {fname, lname, phone, email, checkin, checkout, roomType} = req.body;
    const formData = {
        fname: fname,
        lname: lname,
        phone: phone,
        email: email,
        checkin: checkin,
        checkout: checkout,
        roomType: roomType
    };

    // Db connection object
//    const connection = dbConnect();

    // SQL query to insert form data
    const sql = `INSERT INTO bookings VALUES ('${fname}', '${lname}', '${phone}', '${email}', '${checkin}', '${checkout}', '${roomType}')`;

//    const html = displayBooking();
//    res.render("index", {html});


    // Query the database
//    connection.query(sql, function (err, result) {
//        if (err)
//            throw err;
//        console.log("1 record inserted");
//    });

    // Generate an HTML table displaying booking details
    const bookingDetails = displayBooking(formData);

    const menu = `
    <div class="header-container">
        <h1>Booking Details</h1>
        <div class="dropdown">
            <button id="menuButton" class="dropbtn"><i class="fa fa-bars"></i></button>
            <div id="myDropdown" class="dropdown-content">
                <a href="#">Link 1</a>
            </div>
        </div>
    </div>
`;
    res.render("index", {menu, html: bookingDetails});
});
module.exports = router;