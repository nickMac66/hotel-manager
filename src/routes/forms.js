// Importing the Express module
const express = require('express');

// Importing the path module for working with file and directory paths
const path = require('path');

// Creating Express router
const router = express.Router();

// Resoloving the path to the index.ejs view file
const index = path.resolve(__dirname, '../views/index.ejs');

// Importing the buildForm function from the bookingForm module
const {buildForm} = require('../models/bookingForm');

// Route to display the booking form
router.get('/', (req, res, next) => {
    console.log("hello from the form route");
    let html = buildForm();
    res.render("index", {html});
});

// Exporting the router module so it can be used in other files
module.exports = router;