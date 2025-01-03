/*
 * Name:        server.js
 * Description: Express server setup for serving static files and handling routes
 * Author:      NicMac
 * Date:        November 23, 2024
 */

// server.js
const express = require('express');
const app = express();
const port = 3000;

// Serving static files (HTML, CSS, JS)
app.use(express.static('public'));

// Defining a route for handling client communication
app.get('/', (req, res) => {
    console.log("hello from the server");
    res.sendFile(__dirname + '/index.html');
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


