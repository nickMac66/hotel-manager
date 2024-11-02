/*
 * Name: bookingForm.js
 * Description: JavaScript file to generate a dynamic booking form
 * Author: NicMac
 * Created On: October 12, 2024
 * Last Modified: October 12, 2024
 */

const formFieldsPerRow = 2;

const formFields = {

    fname: {label: "First name", inputType: "text", id: "fname", name: "fname"},
    lname: {label: "Last name", inputType: "text", id: "lname", name: "lname"},
    phone: {label: "Phone", inputType: "text", id: "phone", name: "phone"},
    email: {label: "Email", inputType: "text", id: "email", name: "email"},
    checkin: {label: "Check in", inputType: "date", id: "checkin", name: "checkin"},
    checkout: {label: "Check out", inputType: "date", id: "checkout", name: "checkout"},
    basicRoom: {label: "Basic room", inputType: "radio", id: "basic", name: "roomType"},
    deluxeRoom: {label: "Deluxe room", inputType: "radio", id: "deluxe", name: "roomType"},
    luxuryRoom: {label: "Luxury room", inputType: "radio", id: "luxury", name: "roomType"}

};

$(document).ready(function () {

// Add dynamic page content
    let pageContent = $("#home")[0];
    let formAction = "bookingDetails.html";
    pageContent.innerHTML = generateForm(formFields, formFieldsPerRow, formAction);
    
});