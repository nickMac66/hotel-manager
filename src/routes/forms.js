/*
 * Name:        forms.js
 * Description: Route handlers for displaying and submitting booking forms
 * Author:      NicMac
 * Date:        January 11, 2025
 */

// Import Express modules
const express = require('express');
const bodyParser = require('body-parser');
const {body, validationResult} = require('express-validator');

// Import functions
const {buildForm} = require('../models/bookingForm');
const {userValidationRules, validate} = require('../validation/auth');

// Create express router
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

router.post('/', userValidationRules(), validate, (req, res) => {
    // Get user input data from the form 
    const {fname, lname, phone, email, checkin, checkout} = req.body;
});

module.exports = router;