insertBooking = (formData) => {
    
    // Import function to connect to the database
    const {dbConnect} = require('./dbConnection');
    
    // Db connection object
    const connection = dbConnect();

    const { fname, lname, phone, email, checkin, checkout, roomType } = formData;           

    // SQL query to insert form data
    const sql = `INSERT INTO bookings VALUES ('${fname}', '${lname}', '${phone}', '${email}', '${checkin}', '${checkout}', '${roomType}')`;

    // Query the database
    connection.query(sql, function (err, result) {
        if (err)
            throw err;
        console.log("1 record inserted");
    });
};

module.exports = {
    insertBooking
};



