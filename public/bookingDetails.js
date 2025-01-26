/**
 *  Display booking details
 *  This function generates an HTML table displaying the booking details 
 *  and returns the complete HTML table as a string.
 */
displayBooking = (formData) => {
    
    // Table to display booking details
    let bookingDetails = '<table id="bookingDetailsTable">';

    // Access user input values from the form fields
    for (let formField in formData) {

        // User input values 
        userInput = formData[formField];
        
        // Build the table to display booking details
        switch (formField) {
            case "fname":
                bookingDetails += '<tr><th>First name: ' + userInput + '</th></tr>';
                break;
            case "lname":
                bookingDetails += '<tr><th>Last name: ' + userInput + '</th></tr>';
                break;
            case "phone":
                bookingDetails += '<tr><th>Phone: ' + userInput + '</th></tr>';
                break;
            case "email":
                bookingDetails += '<tr><th>Email: ' + userInput + '</th></tr>';
                break;
            case "checkin":
                bookingDetails += '<tr><th>Check-in: ' + userInput + '</th></tr>';
                break;
            case "checkout":
                bookingDetails += '<tr><th>Check out: ' + userInput + '</th></tr>';
                break;
            case "roomType":
                bookingDetails += '<tr><th>Room type: ' + userInput + '</th></tr>';
                break;
            default:
                bookingDetails = "<tr><th>Invalid</th></tr>";
                break;
        }
    }
    // Include a 'back' button and close the table
    bookingDetails += '<tr><th><a href="http://localhost:3000"><button id="backButton">Back</button></a></th></tr>';
    bookingDetails += '</table>';
    
    return bookingDetails;
};

module.exports = {
    displayBooking
};