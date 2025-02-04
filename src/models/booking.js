console.log("booking class!!!!");
const { mongoConnect } = require('./db/dbConnection');

let client;

class Booking {
    constructor() {
        client = mongoConnect();
    }

    async insert(req) {
        
        const bookingData = {};

        for (let key in req.body) {
            bookingData[key] = req.body[key];
        }

        await client.db('nickemacdonald').collection('bookings').insertOne(bookingData);
        console.log("Booking inserted");
    }

    async getDetails(req) {

        // Create page header
        const header = "booking details";
        
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

        // return {header, bookingDetails};
        return bookingDetails;
    }
}



/**
 *  List all bookings
 *  This function retrieves all bookings from the database and returns an HTML table
 */
const getList = async (req) => {

    // Create page header
    const header = "all hotel bookings";

    // Create a table to display booking details
    let bookingList = "<table>";

    // Get all bookings from the database    
    const bookings = await client.db('nickemacdonald').collection('bookings').find().toArray();

    // Build a table to display the bookings
    bookings.forEach((booking, index) => {

        for (let key in booking) {
            bookingList += "<tr><td>" + key + "</td><td>" + booking[key] + "</td></tr>";
        }
    });
    // Add a back button to return to the main page and close the table
    bookingList += '<tr><td colspan="3"><a href="http://localhost:3000"><button id="backButton">Back</button></a></td></tr>';
    bookingList += "</table>";

    return { header, bookingList };
};

/**
 *  Display booking details
 *  This function generates an HTML table displaying the booking details 
 *  and returns the complete HTML table as a string.
 */
// getDetails = (req) => {

// // Create a table to display booking details
// let bookingDetails = "<table>";

// // Form field key values
// let formData = req.body;

// // Build a table to display the booking details
// for (let key in formData) {

//     let value = formData[key];

//     if (key === "submitButton") {
//         continue
//     }
//     bookingDetails += "<tr><td>" + key + "</td><td>" + value + "</td></tr>";
// }
// bookingDetails += '<tr><td colspan="3"><a href="http://localhost:3000"><button id="backButton">Back</button></a></td></tr>';
// bookingDetails += "</table>";

// return bookingDetails;
// };

module.exports = Booking;