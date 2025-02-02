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

// Import booking class
const Booking = require('../models/booking');

// Import validation
const {formValidationRules, validate} = require('../validation/auth');

// Create express router
const router = express.Router();

// Middleware to parse JSON & URL-encoded bodies
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

//******************************************************************************
// Route handlers
//******************************************************************************

/**
 * Main page
 * This route handles rendering the main page of the application.
 */
router.get('/', (req, res) => {    
    const {mongoConnect} = require('../models/db/dbConnection');
    mongoConnect();


    // const {buildForm} = require('../models/bookingForm');
    // // Define the HTML page header
    // const header = "hotel booking form";
    // // Display the HTML hotel booking form
    // const bookingForm = buildForm();
    // res.render("index", {html: bookingForm, header});
});

/**
 *  Booking form submission
 *  This route handles the submission of the hotel booking form. 
 *  It collects user inputs from the form fields, processes the data,
 *  and inserts it into the database.
 */
router.post('/booking', formValidationRules(), validate, (req, res) => {

    // Import function to insert form data to the db
    const {insertBooking} = require('../../src/models/db/queries');

    // Import function to display booking details
    const {displayBooking} = require('../../public/bookingDetails');

    // User input values
    const {fname, lname, phone, email, checkin, checkout, roomType} = req.body;
    const formData = {fname, lname, phone, email, checkin, checkout, roomType};

    // Query the db to insert the booking details
    insertBooking(formData);

    // Generate an HTML table displaying booking details
    const bookingDetails = displayBooking(formData);

    // Define the page header
    const header = "Hotel Booking Form";

    // Render HTML for the booking details page
    res.render("index", {header, html: bookingDetails});
});
module.exports = router;