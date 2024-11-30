/* 
 * Name: formHandler.js
 * Description: JavaScript file for handling form submissions and related functionality.
 *              This file accepts user input from the form and processes it accordingly.
 * Author: NicMac
 * Created On: October 16, 2024 
 */

//const { express, path } = require('../src/server');
//const { connection } = require('../db/dbConnection');

$(document).ready(function () {

    $('#submit').click(function (event) {

        // Form validation
        validateForm = validateForm();

        if (validateForm) {

            alert("the form IS valid");

            // After the form gets submitted, server.js connects to the db
            $('#myForm').submit();

        } else {

            event.preventDefault();
            alert("the form is NOT valid");

        }
    });
});

function addFormDataToDb() {
    
    console.log("adding data to db");

    const { connection } = require('../db/dbConnection');
    connection.query("SELECT * FROM bookings", function (err, result, fields) {
        if (err)
            throw err;
        console.log("data has been added");
    });
}

module.exports = { addFormDataToDb };

//function addFormDataToDatabase() {
//
//    console.log("adding form data to the database");
//    const {connection} = require('./db/dbConnection.js');
//
//
//    let fname = $('#myForm input[id="fname"]').val();
//    let lname = $('#myForm input[id="lname"]').val();
//    let phone = $('#myForm input[id="phone"]').val();
//    let email = $('#myForm input[id="email"]').val();
//    let checkin = $('#myForm input[id="checkin"]').val();
//    let checkout = $('#myForm input[id="checkout"]').val();
//    let roomType = $('#myForm input[id="roomType"]:checked').val();
//
//    const sql = `INSERT INTO bookings (fname) VALUES (${fname})`;
//
//    // Query the database
//    connection.query(`${connection}`,
//            function (err, result) {
//
//                // Query error message
//                if (err)
//                    console.log(`error executing the query - ${err}`);
//
//                // Display the query results in the console
//                else
//                    console.log('result: ', result);
//            });
//}
//;