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
    res.render("index", {bookingForm});
});
//router.get('/', (req, res) => {    
//    res.render("index", {html});
//});

// Route for booking form submission
router.post('/booking', formValidationRules(), validate, (req, res) => {

    // Import function to connect to the database
    const {dbConnect} = require('../models/db/dbConnection');

    // User input
    const {fname, lname, phone, email, checkin, checkout, roomType} = req.body;

    // Db connection object
    const connection = dbConnect();

    // SQL query to insert form data
    const sql = `INSERT INTO bookings VALUES ('${fname}', '${lname}', '${phone}', '${email}', '${checkin}', '${checkout}', '${roomType}')`;

    connection.query(sql, function (err, result) {
        if (err)
            throw err;
        console.log("1 record inserted");
    });
});
module.exports = router;