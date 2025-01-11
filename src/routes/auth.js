// Importing the Express module
const express = require('express');

// Creating Express router
const router = express.Router();

// Displaying the booking form
router.get('/auth', (req, res, next) => {
    console.log("hello from the auth route");    
});

module.exports = router;


