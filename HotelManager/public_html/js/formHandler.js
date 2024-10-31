/* 
 * Name: formHandler.js
 * Description: JavaScript file for handling form submissions and related functionality.
 *  This file accepts user input from the form and processes it accordingly.
 * Author: NicMac
 * Created On: October 16, 2024 
 */

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("myForm").addEventListener("submit", function (event) {

        formIsValid = validateForm();                        

        if (formIsValid) {
            // Submit the form
            alert("the form is valid");

        } else {
            // Prevent the default form action
            event.preventDefault();
            alert("the form is not valid");
        }
    });
});










//    let bookingDetails = document.getElementById("bookingDetails");
//    // Display user input data
//    bookingDetails.innerHTML = `First name: ${fname}<br>`;
//    bookingDetails.innerHTML += `Last name: ${lname}<br>`;
//    bookingDetails.innerHTML += `Phone: ${phone}<br>`;
//    bookingDetails.innerHTML += `Email: ${email}<br>`;
//    bookingDetails.innerHTML += `Check in: ${checkin}<br>`;
//    bookingDetails.innerHTML += `Check out: ${checkout}<br>`;
//    bookingDetails.innerHTML += `Room type: ${roomType}<br>`;
