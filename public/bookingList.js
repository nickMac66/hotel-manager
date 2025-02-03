const { getBookings } = require('../src/models/db/queries');

const listBookings = async (req) => {

    let bookings = await getBookings();

    console.log("booking list (BOOKING LIST): ", bookings);

    



    return bookings;
};

module.exports = {
    listBookings
};