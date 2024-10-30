/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input 
 * Author: NicMac
 * Created On: October 24, 2024
 */

function validateForm() {

    let isValid = true;

    const formEntries = [];

    $("#myForm th, #myForm input").each(function (index) {

        if ($(this).is("th")) {
           
            formEntries[index] = {label: $(this).text(), value: null};            
        
        } else if ($(this).is("input")) {
        
            formEntries[index][index] = {label: null, value: $(this).val()};            
        
        }

    });











//    // Create references to the booking form input fields
//    let fname = bookingForm.elements['fname'];
//    let lname = bookingForm.elements['lname'];
//    let phone = bookingForm.elements['phone'];
//    let email = bookingForm.elements['email'];
//    let checkin = bookingForm.elements['checkin'];
//    let checkout = bookingForm.elements['checkout'];
//    let roomType = bookingForm.elements['roomType'];

//    // Assign the user input data to variables
//    fname = fname.value;    
//    lname = lname.value;
//    phone = phone.value;
//    email = email.value;
//    checkin = checkin.value;
//    checkout = checkout.value;
//    roomType = roomType.value;          

    return isValid;
}












