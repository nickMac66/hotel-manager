/*
 * Name:        server.js
 * Description: Express server setup for serving static files and handling routes
 * Author:      NicMac
 * Date:        November 23, 2024
 */

const express = require('express');  // Importing the Express module
const path = require('node:path');  // Importing the Path module for working with file paths
const app = express();  // Creating an Express application instance
const PORT = process.env.PORT || 3000;  // Setting the port for the server to listen on (environment variable or default 3000)
const indexHtml = path.resolve('public_html', 'index.html');  // Resolving the absolute path to the index.html file
const bookingDetailsHtml = path.resolve('public_html', 'bookingDetails.html');  // Resolving the absolute path to the index.html file

// Middleware to serve static files from specified directories
app.use('/public_html', express.static(path.join(__dirname, '../public_html')));

app.use('/js', express.static(path.join(__dirname, '../js')));

app.use('/controllers', express.static(path.join(__dirname, '../controllers')));

//app.use('/db', express.static(path.join(__dirname, '../db')));

// Route to send the index.html file when the root URL is accessed
app.get('/', (req, res) => {
    res.sendFile(indexHtml);
});

app.get('/bookingDetails.html', (req, res) => {
    res.sendFile(bookingDetailsHtml);
});

// Route to send the bookingDetails.html file when the bookingDetails URL is accessed
//app.get('bookingDetails.html', (req, res) => {
//    res.sendFile(bookingDetailsHtml);
//});

// Starting the server and listening on the specified port
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});






