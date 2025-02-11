/*
 * Name: booking.js
 * Description: Handles booking-related operations such as inserting and retrieving booking details.
 * Author: NicMac 
 */

const { mongoConnect } = require('./db/dbConnection');
const { ObjectId } = require('mongodb');

class Booking {
    constructor() {
        try {
            this.client = mongoConnect(); // Initialize the MongoDB client connection

        } catch (error) {
            console.error("error connection to the client", error);
            throw new Error("error connecting to the client");
        }
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
            // await this.client.close();
            // console.log("db conn closed");
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
            console.log("db conn closed");
        }
    }

    /**
     * Get booking details and format them into an HTML table
     * @param {Object} req - Express request object containing booking data
     * @returns {Object} - An object containing the header and booking details
     */
    async getDetails(bookingObject) {
        // Create web page header
        const header = "<h2>Thank you for your booking</h2>";

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

        try {
            const bookingDetails = await this.client.db('nickemacdonald').collection('bookings').findOne({ "_id": new ObjectId(id) });
            return { booking: bookingDetails };

        } catch (error) {
            console.error("error getting booking details", error);
            throw new Error("error getting the booking details");

        } finally {
            this.client.close();
            console.log("db conn closed");
        }
    }

    /**
     * Get a list of all bookings
     * @returns {Object} - An object containing the header and booking list
     */
    async getList() {

        // Create web page header
        const header = "<h2>All Bookings</h2>";

        // Create a table to display booking details
        let bookingList = '<div class="booking-container"><table>';

        // Get all bookings from the database    
        try {
            const bookings = await this.client.db('nickemacdonald').collection('bookings').find().toArray();

            // Build a table to display the bookings
            bookings.forEach((booking) => {
                const { _id, fname, lname, phone, email, checkin, checkout } = booking;                                

                bookingList += `<tr><td>Name: ${fname} ${lname}</td>`;
                bookingList += `<td class="fixed-width"><a href="http://localhost:3000/update?id=${booking._id}" class="icon-btn"><i class="fas fa-edit"></i></a></td>`;
                bookingList += `<td class="fixed-width"><button class="icon-btn deleteButton" data-id="${booking._id}"><i class="fas fa-trash"></i></button></td></tr>`;
                bookingList += `<tr><td>Phone: ${phone}</td></tr>`;
                bookingList += `<tr><td>Email: ${email}</td></tr>`;
                bookingList += `<tr><td>Check in: ${checkin}</td></tr>`;
                bookingList += `<tr><td>Check out: ${checkout}</td></tr>`;

                bookingList += "<tr><td colspan='3'><hr></td></tr></div>";
            });

        } catch (error) {
            console.error("error getting the booking list", error);
            throw new Error("error geting the booking list");

        } finally {
            this.client.close();
            console.log("db conn closed");
        }

        bookingList += "</table>";

        return { header, bookingList };
    }

    /**
    * Delete a booking 
    * @param {String} id - The booking ID
    */
    async delete(id) {
        try {
            await this.client.db('nickemacdonald').collection('bookings').deleteOne({ "_id": new ObjectId(id) });

        } catch (error) {
            console.error("error deleting the booking", error);
            throw new Error("error deleting the booking");

        } finally {
            this.client.close();
            console.log("db conn closed");
        }
        console.log("Booking deleted");
    }
}

module.exports = Booking;