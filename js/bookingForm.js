/*
 * Name: bookingForm.js
 * Description: JavaScript file to generate a dynamic booking form
 * Author: NicMac
 * Created On: October 12, 2024
 * Last Modified: October 12, 2024
 */

const formFields = {

    fname: {label: "First name", type: "text", id: "fname", name: "fname"},
    lname: {label: "Last name", type: "text", id: "lname", name: "lname"},
    phone: {label: "Phone", type: "text", id: "phone", name: "phone"},
    email: {label: "Email", type: "text", id: "email", name: "email"},
    checkin: {label: "Check in", type: "date", id: "checkin", name: "checkin"},
    checkout: {label: "Check out", type: "date", id: "checkout", name: "checkout"},
    basicRoom: {label: "Basic room", type: "radio", id: "basic", name: "roomType", value: "basic", group: "Room type"},
    deluxeRoom: {label: "Deluxe room", type: "radio", id: "deluxe", name: "roomType", value: "deluxe", group: "Room type"},
    luxuryRoom: {label: "Luxury room", type: "radio", id: "luxury", name: "roomType", value: "luxury", group: "Room type"}    

};

$(document).ready(function () {
    
    console.log("bookingForm.js");

// Add dynamic page content
    let pageContent = $("#home")[0];
    let formAction = "bookingDetails.html";
    pageContent.innerHTML = buildForm(formFields, formAction);
    
});