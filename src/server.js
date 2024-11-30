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

app.post('/', (req, res) => {
    const dbConnection = require(dbConnectionJs);
    const {connection} = require('../db/dbConnection');
    connection.connect(function (err) {

        if (err) {

            console.log("Error in the connection");
            console.log(err);

        } else {

            const mysql = require('mysql');

            console.log('database connected');

            connection.query('SHOW DATABASES',
                    function (err, result) {

                        if (err)
                            console.log(`error executing the query - ${err}`);

                        else
                            console.log('result: ', result);

                    });
        }
    });
    res.send("POST Request Called");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
