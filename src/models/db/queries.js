// Import function to connect to the database
const { MongoClient } = require('mongodb');
const { mongoConnect } = require('./dbConnection');

// Connect to the database
const client = mongoConnect();

/**
 *  Insert booking data
 *  This function handles the insertion of booking form data into the database. 
 *  It collects user inputs from the form fields, constructs an SQL query,
 *  and executes the query to insert the data into the bookings table.
 */

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

    // Close the client connection
    client.close();
    console.log("db connection closed");
};

const getBookings = async () => {

    let bookingList = "<table>";

    const bookings = await client.db('nickemacdonald').collection('bookings').find().toArray();

    // Iterate through the array of bookings
    bookings.forEach((booking, index) => {
        // console.log(`Booking ${index + 1}:`, booking);
        for (let key in booking) {
            bookingList += "<tr><td>" + key + "</td><td>" + booking[key] + "</td></tr>";            
        }
    });
    bookingList += '<tr><td colspan="3"><a href="http://localhost:3000"><button id="backButton">Back</button></a></td></tr>';
    bookingList += "</table>";
    
    console.log("booking list QUERIES: ", bookingList);
    return bookingList;
};

module.exports = {
    insertBooking,
    getBookings
};