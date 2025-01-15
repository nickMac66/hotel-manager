/*
 * Name:        forms.js
 * Description: Route handlers for displaying and submitting booking forms
 * Author:      NicMac
 * Date:        January 11, 2025
 */

// Importing Express modules
const express = require('express');
const bodyParser = require('body-parser');
const {body, validationResult} = require('express-validator');

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
router.post('/', body('*').notEmpty(), (req, res) => {
    
    const errors = validationResult(req);
    
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }
    
    console.log(req.body.fname);
    
    

//    // Import function to validate user input
//    const {validateForm} = require('../validation/auth');
//    
//    let isValid = validateForm(req);
//    
//    if(isValid) {
//        console.log("...valid...");        
//    } else {
//        console.log("!!!not valid!!!");
//    }
});
// Exporting the router module so it can be used in other files
module.exports = router;