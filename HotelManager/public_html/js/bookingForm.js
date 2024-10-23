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

    let pageContent = document.querySelector(".container");

    pageContent.innerHTML = formGenerator(formData);

    document.getElementById("form").addEventListener("submit", function (event) {

        // Get the booking form
        let bookingForm = document.getElementById("form");

        // Get values from user input
        let fname = bookingForm.elements['fname'];
        fname = fname.value;
        // Log the first name
        console.log(`first name: ${fname}`);

        let lname = bookingForm.elements['lname'];
        lname = lname.value;
        // Log the last name
        console.log(`last name: ${lname}`)

        let phone = bookingForm.elements['phone'];
        phone = phone.value;
        // Log the phone number
        console.log(`Phone: ${phone}`);

        let email = bookingForm.elements['email'];
        email = email.value;
        // Log the email address
        console.log(`Email: ${email}`);

        let checkin = bookingForm.elements['checkin'];
        checkin = checkin.value;
        // Log the check in date
        console.log(`Check in: ${checkin}`);

        let checkout = bookingForm.elements['checkout'];
        checkout = checkout.value;
        // Log the check out date
        console.log(`Check out: ${checkout}`);

        let roomType = bookingForm.elements['roomType'];
        roomType = roomType.value;
        // Log the check out date
        console.log(`Room type: ${roomType}`);

        pageContent.innerHTML = `First name: ${fname}<br>`;
        pageContent.innerHTML += `Last name: ${lname}<br>`;
        pageContent.innerHTML += `Phone: ${phone}<br>`;
        pageContent.innerHTML += `Email: ${email}<br>`;
        pageContent.innerHTML += `Check in: ${checkin}<br>`;
        pageContent.innerHTML += `Check out: ${checkout}<br>`;
        pageContent.innerHTML += `Room type: ${roomType}<br>`;        
    });
});