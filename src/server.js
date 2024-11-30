/*
 * Name:        server.js
 * Description: Express server setup for serving static files and handling routes
 * Author:      NicMac
 * Date:        November 24, 2024
 */

// Load Node.js modules
const express = require('express'); 
const path = require('node:path'); 
const mysql = require('mysql');

module.exports = {
    express,
    path,
    mysql
};

// Initialize an Express applicaiton
const app = express(); 

// Define the port number to listen from
const PORT = process.env.PORT || 3000; 

// Define file paths
const indexHtml = path.resolve('public_html', 'index.html'); 
const bookingDetailsHtml = path.resolve('public_html', 'bookingDetails.html');
const dbConnectionJs = path.resolve('db', 'dbConnection.js');
const formControllerJs = path.resolve('controllers', 'formController.js');

// Configure Express app to serve static files from specified directories
app.use('/public_html', express.static(path.join(__dirname, '../public_html')));
app.use('/js', express.static(path.join(__dirname, '../js')));
app.use('/controllers', express.static(path.join(__dirname, '../controllers')));
app.use('/db', express.static(path.join(__dirname, '../db')));

// Define routes for serving HTML files
app.get('/', (req, res) => {
    res.sendFile(indexHtml);
});

app.get('/bookingDetails.html', (req, res) => {
    res.sendFile(bookingDetailsHtml);
});

// Route handler for POST requests
//app.post('/submit-form', addFormDataToDb);
app.post('/', (req, res) => {
    const dbConnection = require(dbConnectionJs);            
    res.send("POST Request Called");       
});

// Set up Express application to listen for incoming requests
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});