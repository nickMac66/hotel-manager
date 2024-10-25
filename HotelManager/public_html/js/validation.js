/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input 
 * Author: NicMac
 * Created On: October 24, 2024
 */

function validateForm() {

    console.log("validating...");
    
    let isValid = true;

    // Create a reference to the booking form
    let bookingForm = document.getElementById("form");

    // Create references to the booking form input fields
    let fname = bookingForm.elements['fname'];
    let lname = bookingForm.elements['lname'];
    let phone = bookingForm.elements['phone'];
    let email = bookingForm.elements['email'];
    let checkin = bookingForm.elements['checkin'];
    let checkout = bookingForm.elements['checkout'];
    let roomType = bookingForm.elements['roomType'];

    // Assign the user input data to variables
    fname = fname.value;    
    lname = lname.value;
    phone = phone.value;
    email = email.value;
    checkin = checkin.value;
    checkout = checkout.value;
    roomType = roomType.value;

    return false;
}












