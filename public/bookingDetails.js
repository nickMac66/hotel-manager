/**
 *  Display booking details
 *  This function generates an HTML table displaying the booking details 
 *  and returns the complete HTML table as a string.
 */
displayBooking = (req) => {

    // Create a table to display booking details
    let bookingDetails = "<table>";

    // Form field key values
    let formData = req.body;    

    // Build a table to display the booking details
    for (let key in formData) {
        
        let value = formData[key];
        
        if(key === "submitButton") {
            continue
        }
        bookingDetails += "<tr><td>" + key + "</td><td>" + value + "</td></tr>";
    }
    bookingDetails += '<tr><td colspan="3"><a href="http://localhost:3000"><button id="backButton">Back</button></a></td></tr>';
    bookingDetails += "</table>";    

    return bookingDetails;
};

module.exports = {
    displayBooking
};