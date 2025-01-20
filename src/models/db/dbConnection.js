/* 
 * Name: dbConnection.js
 * Description: Establishes a connection to the database
 * Author: NicMac
 * Date: October 18, 2024 
 */

// Import the mysql module from the server
const mysql = require('mysql');

/**
 * Function to establish a connection to the database.
 * @returns {Object} connection - Database connection object
 */
function dbConnect() {

    // Create a database connection object
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'hotel_manager'
    });        

    // Connect to the database
    connection.connect(function (err) {
        if (err) {
            console.log("!!!!!connection error!!!!!");
            console.log(err);
        } else {
            console.log('.....database connected.....');
        }
    });
    
    return connection;
}
module.exports = {dbConnect};