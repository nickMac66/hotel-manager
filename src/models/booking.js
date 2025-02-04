/*
 * Name: booking.js
 * Description: Handles booking-related operations such as inserting and retrieving booking details.
 * Author: NicMac 
 */

const { mongoConnect } = require('./db/dbConnection');

let client;

class Booking {

    constructor() {
        // Initialize the MongoDB client connection
        client = mongoConnect();
    }

    /**
     * Insert booking data into the database
     * @param {Object} req - Express request object containing booking data
     */
    async insert(req) {

        const bookingData = {};

        // Populate bookingData with values from req.body
        for (let key in req.body) {
            bookingData[key] = req.body[key];
        }

        // Insert the booking data into the database
        await client.db('nickemacdonald').collection('bookings').insertOne(bookingData);
        console.log("Booking inserted");
    }

    /**
     * Get booking details and format them into an HTML table
     * @param {Object} req - Express request object containing booking data
     * @returns {Object} - An object containing the header and booking details
     */
    async getDetails(req) {

        // Create page header
        const header = "thank you for your booking";

        // Create a table to display booking details
        let bookingDetails = "<table>";

        // Form field key values
        let formData = req.body;

        // Build a table to display the booking details
        for (let key in formData) {

            let value = formData[key];

            if (key === "submitButton") {
                continue
            }
            bookingDetails += "<tr><td>" + key + "</td><td>" + value + "</td></tr>";
        }
        bookingDetails += '<tr><td colspan="3"><a href="http://localhost:3000"><button id="backButton">Back</button></a></td></tr>';
        bookingDetails += "</table>";
        
        return { header, bookingDetails };
    }

    /**
     * Get a list of all bookings
     * @param {Object} req - Express request object
     * @returns {Object} - An object containing the header and booking list
     */
    async getList(req) {

        // Create page header
        const header = "booking list";

        // Create a table to display booking details
        let bookingList = "<table>";

        // Get all bookings from the database    
        const bookings = await client.db('nickemacdonald').collection('bookings').find().toArray();

        // Build a table to display the bookings
        bookings.forEach((booking, index) => {

            for (let key in booking) {
                if(key === "submitButton") {
                    continue;
                }

                bookingList += "<tr><td>" + key + "</td><td>" + booking[key] + "</td></tr>";                
            }
            // Add an update and cancel button to each booking
            bookingList += '<tr><td colspan="3"><a href="http://localhost:3000/bookingUpdate"><button id="updateButton">Update</button></a></td></tr>';
            bookingList += '<tr><td colspan="3"><a href="http://localhost:3000/bookingCancel"><button id="cancelButton">Cancel</button></a></td></tr>';
            
            // Add a horizontal rule between bookings
            bookingList += "<tr><td colspan='3'><hr></td></tr>";
        });       
         
        // Add a back button to return to the main page and close the table
        bookingList += '<tr><td colspan="3"><a href="http://localhost:3000"><button id="backButton">Back</button></a></td></tr>';
        bookingList += "</table>";

        return { header, bookingList };
    }
}

module.exports = Booking;