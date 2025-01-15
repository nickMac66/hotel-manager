/*
 * Name:        server.js
 * Description: Express server setup for serving static files and handling routes
 * Author:      NicMac
 * Date:        November 23, 2024
 */

// Import express module and create Express server
const express = require('express');
const app = express();

// Import routes
const formRoute = require('../src/routes/forms');

// Define the port number on which the server will listen
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Handle route requests
app.use('/', formRoute);

// Serve static files (HTML, CSS, JS)
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


