/*
 * Name: bookingForm.js
 * Description: JavaScript file to generate a dynamic booking form
 * Author: NicMac
 * Created On: October 12, 2024
 * Last Modified: October 12, 2024
 */

// input id is the object
const radio = {
    basic: {name: "roomType", value: "Basic"},
    deluxe: {name: "roomType", value: "Deluxe"},
    luxury: {name: "roomType", value: "Luxury"}
};

const formData = {
    cell1: {fname: "First name ===>", inputType: "text"},
    cell2: {lname: "Last name ===>", inputType: "text", nextRow: true},
    cell3: {phone: "Phone ===>", inputType: "text"},
    cell4: {email: "Email ===>", inputType: "text", nextRow: true},
    cell5: {checkin: "Check in", inputType: "date"},
    cell6: {checkout: "Check out", inputType: "date", nextRow: true},
    cell7: {roomType: "Room type", inputType: radio},
    cell8: {inputType: "submit"}
};

document.addEventListener("DOMContentLoaded", function () {

    // Add dynamic page content
    let pageContent = document.querySelector(".container");
    pageContent.innerHTML = formGenerator(formData);

    document.getElementById("form").addEventListener("submit", function (event) {
        
        // Prevent default form action
        event.preventDefault();
                
        // Get references to the booking form
        let bookingForm = document.getElementById("form");
        
        // Get references to the booking form input fields
        let fname = bookingForm.elements['fname'];
        let lname = bookingForm.elements['lname'];
        let phone = bookingForm.elements['phone'];
        let email = bookingForm.elements['email'];
        let checkin = bookingForm.elements['checkin'];
        let checkout = bookingForm.elements['checkout'];
        let roomType = bookingForm.elements['roomType'];

        // Assign the input field values to variables
        fname = fname.value;        
        lname = lname.value;       
        phone = phone.value;
        email = email.value;
        checkin = checkin.value;
        checkout = checkout.value;
        roomType = roomType.value;

        // Display user input data
        pageContent.innerHTML = `First name: ${fname}<br>`;
        pageContent.innerHTML += `Last name: ${lname}<br>`;
        pageContent.innerHTML += `Phone: ${phone}<br>`;
        pageContent.innerHTML += `Email: ${email}<br>`;
        pageContent.innerHTML += `Check in: ${checkin}<br>`;
        pageContent.innerHTML += `Check out: ${checkout}<br>`;
        pageContent.innerHTML += `Room type: ${roomType}<br>`;        
    });
});