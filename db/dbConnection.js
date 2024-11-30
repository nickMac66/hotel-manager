/*
 * Name:        dbConnection.js
 * Description: Database connection setup
 * Author:      NicMac
 * Date:        November 24, 2024
 */

const {express, path, mysql} = require('../src/server');

// Db credentials
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'hotel_manager'
    });

// Connect to the database using db credentials
    connection.connect(function (err) {

        // Connection error message
        if (err) {
            console.log("Error connecting to the database");
            console.log(err);

            // Connection success message
        } else {
            console.log('...database connected...');
            module.exports = {connection};
        }
    });



