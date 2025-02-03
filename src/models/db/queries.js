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

const insertBooking = async (req) => {

    // Create an object to store the booking data
    const bookingData = {};
    
    // Add each form field to the booking data object
    for(let key in req.body) {
        bookingData[key] = req.body[key];        
    }

    // Insert the booking data into the database
    await client.db('nickemacdonald').collection('bookings').insertOne(bookingData);    

    // Close the client connection
    client.close();
    console.log("db connection closed");
};

const getBookings = async () => {

    const bookings = await client.db('nickemacdonald').collection('bookings').find().toArray();

    return bookings;
};

module.exports = {
    insertBooking,
    getBookings
};