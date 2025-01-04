/*
 * Name:        server.js
 * Description: Express server setup for serving static files and handling routes
 * Author:      NicMac
 * Date:        November 23, 2024
 */

// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const index = path.resolve(__dirname, '../public/index.html');

// Defining a route for handling client communication
app.get('/', (req, res) => {
    console.log("hello from the server");
    res.sendFile(index);
});

// Serving static files (HTML, CSS, JS)
app.use(express.static('public'));

// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


