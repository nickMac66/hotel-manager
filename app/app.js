/*
 * Name:        server.js
 * Description: Express server setup for serving static files and handling routes
 * Author:      NicMac
 * Date:        November 23, 2024
 */

// Import express module and create Express server
const express = require('express');
const app = express();

// Importing routes
const formRoute = require('../src/routes/forms');
const authRoute = require('../src/routes/auth');

// Define the port number on which the server will listen
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Handling route requests
app.use('/', formRoute);
app.use('/', authRoute);

// Serving static files (HTML, CSS, JS)
app.use(express.static('public'));

// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


