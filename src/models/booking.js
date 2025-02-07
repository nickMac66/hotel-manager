/*
 * Name: booking.js
 * Description: Handles booking-related operations such as inserting and retrieving booking details.
 * Author: NicMac 
 */

const { mongoConnect } = require('./db/dbConnection');
const { ObjectId } = require('mongodb');

class Booking {
    constructor() {
        this.client = mongoConnect(); // Initialize the MongoDB client connection
    }

    /**
     * Insert booking data into the database
     * @param {Object} req - Express request object containing booking data
     */
    insert(bookingObject) {
        this.client.db('nickemacdonald').collection('bookings').insertOne(bookingObject);
        console.log("Booking inserted");
    }

    /**
     * Update a booking
     * @param {Object} req - Express request object containing booking data
     * @param {string} id - The ID of the booking to update
     */
    async update(bookingObject) {
        const { id, submitButton, ...filteredBookingObject } = bookingObject;

        // Update the booking data in the database
        await this.client.db('nickemacdonald').collection('bookings').updateOne(
            { "_id": new ObjectId(id) },
            { $set: filteredBookingObject }
        );

        console.log("Booking updated");
    }

    /**
     * Get booking details and format them into an HTML table
     * @param {Object} req - Express request object containing booking data
     * @returns {Object} - An object containing the header and booking details
     */
    async getDetails(bookingObject) {
        // Create page header
        const header = "thank you for your booking";

        // Create a table to display booking details
        let bookingDetails = "<table>";

        const entries = Object.entries(bookingObject);
        for (const [key, value] of entries) {
            bookingDetails += "<tr><td>" + key + "</td><td>" + value + "</td></tr>";
        }

        // Add a back button to return to the main page
        bookingDetails += '<tr><td colspan="3"><a href="http://localhost:3000"><button id="backButton">Back</button></a></td></tr></table>';
        return { header, bookingDetails };
    }

    /**
     * Get booking details by 'booking id'
     * @param {Object} id - Express request object containing booking data
     * @returns {Object} - An object containing the header and booking details
     */
    async getDetailsById(id) {

        const bookingDetails = await this.client.db('nickemacdonald').collection('bookings').findOne({ "_id": new ObjectId(id) });

        return { booking: bookingDetails };
    }


    /**
     * Get a list of all bookings
     * @returns {Object} - An object containing the header and booking list
     */
    async getList() {

        // Create page header
        const header = "booking list";

        // Create a table to display booking details
        let bookingList = "<table>";

        // Get all bookings from the database    
        const bookings = await this.client.db('nickemacdonald').collection('bookings').find().toArray();

        // Build a table to display the bookings
        bookings.forEach((booking) => {

            for (let key in booking) {
                bookingList += "<tr><td>" + key + "</td><td>" + booking[key] + "</td></tr>";
            }

            // Add an update and delete button to each booking
            // bookingList += `<tr><td colspan="3"><a href="http://localhost:3000/update?id=${booking._id}"><button id="updateButton">Update</button></a></td></tr>`;
            // bookingList += `<tr><td colspan="3"><a href="http://localhost:3000/delete?id=${booking._id}"><button id="deleteButton">Delete</button></a></td></tr>`;

            bookingList += `<tr><td colspan="2"><a href="http://localhost:3000/update?id=${booking._id}"><button id="updateButton">Update</button></a></td>`;
            bookingList += `<td><a href="http://localhost:3000/delete?id=${booking._id}"><button id="deleteButton">Delete</button></a></td></tr>`;

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