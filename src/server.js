/*
 * Name:        server.js
 * Description: Express server setup for serving static files and handling routes
 * Author:      NicMac
 * Date:        November 23, 2024
 */

const express = require('express');
const path = require('node:path');
const app = express();
const PORT = process.env.PORT || 3000;
const mysql = require('mysql');
const multer = require('multer');
const upload = multer(); // Configure multer for parsing multipart/form-data

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const indexHtml = path.resolve('public_html', 'index.html');
const bookingDetailsHtml = path.resolve('public_html', 'bookingDetails.html');
const dbConnectionJs = path.resolve('db', 'dbConnection.js');

app.use('/public_html', express.static(path.join(__dirname, '../public_html')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/controllers', express.static(path.join(__dirname, '../controllers')));
app.use('/db', express.static(path.join(__dirname, '../db')));

app.get('/', (req, res) => {
    res.sendFile(indexHtml);
});

app.get('/bookingDetails.html', (req, res) => {
    res.sendFile(bookingDetailsHtml);
});

// Route to handle form submission
app.post('/', upload.none(), (req, res) => {
    console.log("Form submitted");

    // Log the incoming form data
    console.log(req.body);

    const { fname, lname, phone, email, checkin, checkout, roomType } = req.body;

    const sql = 'INSERT INTO bookings (fname, lname, phone, email, checkin, checkout, roomType) VALUES (?, ?, ?, ?, ?, ?, ?)';

    const { dbConnect } = require('../db/dbConnection');
    const connection = dbConnect();

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

    connection.end();
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

exports.mysql = mysql;

