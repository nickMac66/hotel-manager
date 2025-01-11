/*
 * Name:        server.js
 * Description: Express server setup for serving static files and handling routes
 * Author:      NicMac
 * Date:        November 23, 2024
 */

// Import express module and create instance of an Express application
const express = require('express');

// Importing the routes
const formRoute = require('../src/routes/forms');
const authRoute = require('../src/routes/auth');


// Define the port number on which the server will listen
const port = 3000;

// Creating express server
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Handling routes request
app.use('/', formRoute);
app.use('/', authRoute);

// Serving static files (HTML, CSS, JS)
app.use(express.static('public'));

// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


