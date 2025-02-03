const { getBookings } = require('../src/models/db/queries');

const listBookings = async (req) => {
    
    // Create a table to display booking details
    let bookingList = "<table>";

    // Get all bookings from the database
    let bookings = await getBookings();

    // Build a table to display the bookings
    bookings.forEach((booking, index) => {
        
        for (let key in booking) {
            bookingList += "<tr><td>" + key + "</td><td>" + booking[key] + "</td></tr>";
        }
    });
    // Add a back button to return to the main page and close the table
    bookingList += '<tr><td colspan="3"><a href="http://localhost:3000"><button id="backButton">Back</button></a></td></tr>';
    bookingList += "</table>";

    return bookingList;
};

module.exports = {
    listBookings
};