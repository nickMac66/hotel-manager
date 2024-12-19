/*
 * Name:        server.js
 * Description: Express server setup for serving static files and handling routes
 * Author:      NicMac
 * Date:        November 23, 2024
 */

// Import the required modules
const express = require('express');
const path = require('node:path');
const mysql = require('mysql');
const multer = require('multer');

// Initialize Express app and middleware
const upload = multer();
const app = express();

// Set the port number for the Express app to listen to incoming requests
const PORT = process.env.PORT || 3000;

// Create an absolute path to files
const index = path.resolve('public_html', 'index.html');
const bookingDetails = path.resolve('public_html', 'bookingDetails.html');
const dbConnection = path.resolve('db', 'dbConnection.js');

// Middleware functions to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/public_html', express.static(path.join(__dirname, '../public_html')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/controllers', express.static(path.join(__dirname, '../controllers')));
app.use('/db', express.static(path.join(__dirname, '../db')));

app.get('/', (req, res) => {
    res.sendFile(index);
});

app.get('/bookingDetails.html', (req, res) => {
    res.sendFile(bookingDetails);
});

// Route to handle form submission
app.post('/', upload.none(), (req, res) => {
    console.log("Form submitted");

    // Log the incoming form data
    console.log(req.body);

    // Extract properties from the req.body object (form data)
    const { fname, lname, phone, email, checkin, checkout, roomType } = req.body;
    
    // SQL to query the database
    const sql = 'INSERT INTO bookings (fname, lname, phone, email, checkin, checkout, roomType) VALUES (?, ?, ?, ?, ?, ?, ?)';
    
    // Connect to the database
    const { dbConnect } = require('../db/dbConnection');
    const connection = dbConnect();

    // Query the database
    connection.query(sql, [fname, lname, phone, email, checkin, checkout, roomType], 
        function (err, result) {
            if (err) {
                console.log(`Error executing the query - ${err}`);
                res.status(500).send("Error inserting data");
            } else {
                console.log('Result: ', result);
                res.send("Data inserted successfully");
            }
        });

    // Close the database connection
    connection.end();
});

// Start the server and listen on port 3000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

// Export the mysql module to use in other modules
exports.mysql = mysql;