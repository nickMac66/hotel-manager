/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input
 * Author: NicMac
 * Created On: October 24, 2024
 */
const express = require('express');
const {query, matchedData, validationResult} = require('express-validator');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();
const app = express();

// Middleware for parsing application/json
app.use(bodyParser.json());

// Middleware for parsing application/xwww-
app.use(bodyParser.urlencoded({extended: true}));

// for parsing multipart/form-data
app.use(upload.array());

// Middleware to parse incoming request bodies that are in JSON format
app.use(express.json());

function validateForm(userInput) {

    const formData = Object.entries(userInput.body);

    for (const[key, value] of formData) {
        console.log(`${key}: ${value}`);
        if (value === "") {
            console.log(key + " is empty");
        }
    }

    const {fname, lname, phone, email, checkin, checkout, roomType} = userInput.body;



    let isValid = true;
    console.log("hello from validation");




    return isValid;
}
module.exports = {
    validateForm
};