/*
 * Name:        server.js
 * Description: Express server 
 * Author:      NicMac
 * Date:        November 23, 2024
 */

// Import express module and create Express server
const express = require('express');
const app = express();

// Import routes
const bookingRoutes = require('../src/routes/bookingRoutes');

// Port number for the server to listen
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Handle route requests
app.use('/', bookingRoutes);

// Serve static files 
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});