// Importing the Express module
const express = require('express');

// Importing the body-parser module to parse request bodies
const bodyParser = require('body-parser');

// Creating Express router
const router = express.Router();

// Middleware to parse JSON-encoded bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));

// Validating POST request
router.post('/auth', (req, res, next) => {
    console.log("hello from the auth route");
});

// Exporting the router module so it can be used in other files
module.exports = router;