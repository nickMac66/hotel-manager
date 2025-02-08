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
    async insert(bookingObject) {
        try {
            this.client.db('nickemacdonald').collection('bookings').insertOne(bookingObject);
            console.log("Booking inserted");

        } catch (error) {
            console.error("error inserting the booking", error);
            throw new Error("error inserting the booking");

        } finally {
            await this.client.close();
            console.log("db conn closed");
        }
    }

    /**
     * Update a booking
     * @param {Object} req - Express request object containing booking data
     * @param {string} id - The ID of the booking to update
     */
    async update(bookingObject) {
        const { id, submitButton, ...filteredBookingObject } = bookingObject;

        try {
            // Update the booking data in the database
            await this.client.db('nickemacdonald').collection('bookings').updateOne(
                { "_id": new ObjectId(id) },
                { $set: filteredBookingObject }
            );
            console.log("booking updated");

        } catch (error) {
            console.error("error updating the booking")
            throw new Error("error updating the booking");

        } finally {
            await this.client.close();
        }
    }

    /**
     * Delete a booking 
     * @param {string} id - The ID of the booking to delete
     */
    async delete(bookingObject) {
        const { id } = bookingObject;
        console.log("...deleting");

        // Delete the booking data from the database
        await this.client.db('nickemacdonald').collection('bookings').deleteOne(
            { "_id": new ObjectId(id) }
        );

        console.log("Booking deleted");
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

            bookingList += `<tr><td colspan="2"><a href="http://localhost:3000/update?id=${booking._id}"><button id="updateButton">Update</button></a></td>`;
            bookingList += `<tr><td colspan="2"><button class="deleteButton" data-id="${booking._id}">Delete</button></a></td>`;

            // Add a horizontal rule between bookings
            bookingList += "<tr><td colspan='3'><hr></td></tr>";
        });

        // Add a back button to return to the main page and close the table
        bookingList += '<tr><td colspan="3"><a href="http://localhost:3000"><button id="backButton">Back</button></a></td></tr>';
        bookingList += "</table>";

        return { header, bookingList };
    }

    /**
    * Delete a booking 
    * @param {String} id - The booking ID
    */
    async delete(id) {
        await this.client.db('nickemacdonald').collection('bookings').deleteOne({ "_id": new ObjectId(id) });
        console.log("Booking deleted");
    }
}

module.exports = Booking;