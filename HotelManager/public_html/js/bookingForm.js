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
    fname: {value: "First name ===>", inputType: "text", name: "fname"},
    lname: {value: "Last name ===>", inputType: "text", name: "lname", nextRow: true},
    phone: {value: "Phone ===>", inputType: "text", name: "phone"},
    email: {value: "Email ===>", inputType: "text", name: "email", nextRow: true},
    checkin: {value: "Check in", inputType: "date", name: "checkin"},
    checkout: {value: "Check out", inputType: "date", name: "checkout", nextRow: true},
    roomType: {value: "Room type", inputType: radio, name: "roomType"},
    submit: {inputType: "submit", name: "submit", action: "bookingDetails.html"}
};

document.addEventListener("DOMContentLoaded", function () {

    // Add dynamic page content
    let pageContent = document.getElementById("home");
    let formAction = "bookingDetails.html"
    pageContent.innerHTML = formGenerator(formData, formAction);

});