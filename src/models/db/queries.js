// Import function to connect to the database
const {dbConnect} = require('./dbConnection');

/**
 *  Insert booking data
 *  This function handles the insertion of booking form data into the database. 
 *  It collects user inputs from the form fields, constructs an SQL query,
 *  and executes the query to insert the data into the bookings table.
 */
insertBooking = (formData) => {

    // Db connection object
    const connection = dbConnect();

    const {fname, lname, phone, email, checkin, checkout, roomType} = formData;

    // SQL query to insert form data
    const sql = `INSERT INTO bookings VALUES ('${fname}', '${lname}', '${phone}', '${email}', '${checkin}', '${checkout}', '${roomType}')`;

    // Query the database
    connection.query(sql, function (err, result) {
        if (err)
            throw err;
        console.log("1 record inserted");
    });
};

module.exports = {
    insertBooking
};