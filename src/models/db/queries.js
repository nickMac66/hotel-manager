// Import function to connect to the database
const { mongoConnect } = require('./dbConnection');

/**
 *  Insert booking data
 *  This function handles the insertion of booking form data into the database. 
 *  It collects user inputs from the form fields, constructs an SQL query,
 *  and executes the query to insert the data into the bookings table.
 */

// Connect to the database
const client = mongoConnect();

insertBooking = (req) => {
       
    // User input values
    const { fname, lname, phone, email, checkin, checkout, roomType } = req.body;

    client.db('nickemacdonald').collection('bookings').insertOne({
        fname: fname,
        lname: lname,
        phone: phone,
        email: email, 
        checkin: checkin,
        checkout: checkout
    });
};

module.exports = {
    insertBooking
};