displayBooking = (formData) => {

    console.log("displaying the booking details");
    let bookingDetails = '<table>';

    for (let data in formData) {
//        bookingDetails += formData[data];
        userInput = formData[data];
        switch (data) {
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
                bookingDetails += '<tr><th>Room type:: ' + userInput + '</th></tr>';
                break;
            default :
                bookingDetails = "invalid";
                break;
        }
    }
    return bookingDetails;
};
module.exports = {
    displayBooking
};






