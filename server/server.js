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
const index = path.resolve(__dirname, '../views/index.ejs');
//const formController = path.resolve(__dirname, '../src/controllers/formController.js');

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Defining a route for handling client communication
app.get('/', (req, res) => {   
    console.log("hello from the server");     
    const {buildForm} = require('../public/models/bookingForm');
    let html = buildForm();       
    res.render("index", { html });   
});


// Serving static files (HTML, CSS, JS)
app.use(express.static('public'));

// Starting the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});


