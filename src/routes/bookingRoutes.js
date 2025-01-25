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

// Route to display the booking form
router.get('/', (req, res) => {
    const pageTitle = '<div class="header-container"><h1>Hotel Booking Form</h1><button class="btn"><i class="fa fa-bars"></i></button></div>';    
    res.render("index", {html: bookingForm, pageTitle: pageTitle});
});


// Route to display booking details
//router.get('/booking', (req, res) => {
//    let pageTitle = '<h1>Booking details</h1>';
//    res.render("index", {pageTitle});
//});

// Route for booking form submission
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

    const bookingDetails = displayBooking(formData);

    const pageTitle = '<h1>booking details</h1>';
    res.render("index", {pageTitle: pageTitle, html: bookingDetails});
});
module.exports = router;