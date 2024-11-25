// Load the MySQL module
const mysql = require('mysql');

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
        console.log("Error in the connection");
        console.log(err);

    // Connection success message
    } else {
        console.log('database connected');
        
        // Query the database
        connection.query('SHOW DATABASES',
                function (err, result) {

                    // Query error message
                    if (err)
                        console.log(`error executing the query - ${err}`);

                    // Display the query results in the console
                    else
                        console.log('result: ', result);
                });
    }
});