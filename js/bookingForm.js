/*
 * Name: bookingForm.js
 * Description: JavaScript file contains functions to initialize the booking form and get user input
 * Author: NicMac
 * Date: October 12, 2024
 */

// Function to initialize the booking form object
function initializeFormObject() {

//    const formObject = {
//        fname: {label: "First name", type: "text", id: "fname", name: "fname"},
//        lname: {label: "Last name", type: "text", id: "lname", name: "lname"},
//        phone: {label: "Phone", type: "text", id: "phone", name: "phone"},
//        email: {label: "Email", type: "text", id: "email", name: "email"},
//        checkin: {label: "Check in", type: "date", id: "checkin", name: "checkin"},
//        checkout: {label: "Check out", type: "date", id: "checkout", name: "checkout"}
//    };

    // Object containing form fields
    const formObject = {
        fname: {label: "First name", type: "text", id: "fname", name: "fname"},
        lname: {label: "Last name", type: "text", id: "lname", name: "lname"},
        phone: {label: "Phone", type: "text", id: "phone", name: "phone"},
        email: {label: "Email", type: "text", id: "email", name: "email"},
        checkin: {label: "Check in", type: "date", id: "checkin", name: "checkin"},
        checkout: {label: "Check out", type: "date", id: "checkout", name: "checkout"},
        roomType: {
            basicRoom: {label: "Basic room", type: "radio", id: "basic", name: "roomType", value: "basic"},
            deluxeRoom: {label: "Deluxe room", type: "radio", id: "deluxe", name: "roomType", value: "deluxe"},
            luxuryRoom: {label: "Luxury room", type: "radio", id: "luxury", name: "roomType", value: "luxury"}
        }
    };
    return formObject;
}



//    const formFields = {
//        fname: {label: "First name", type: "text", id: "fname", name: "fname"},
//        lname: {label: "Last name", type: "text", id: "lname", name: "lname"},
//        phone: {label: "Phone", type: "text", id: "phone", name: "phone"},
//        email: {label: "Email", type: "text", id: "email", name: "email"},
//        checkin: {label: "Check in", type: "date", id: "checkin", name: "checkin"},
//        checkout: {label: "Check out", type: "date", id: "checkout", name: "checkout"},
//        basicRoom: {label: "Basic room", type: "radio", id: "basic", name: "roomType", value: "basic"},
//        deluxeRoom: {label: "Deluxe room", type: "radio", id: "deluxe", name: "roomType", value: "deluxe"},
//        luxuryRoom: {label: "Luxury room", type: "radio", id: "luxury", name: "roomType", value: "luxury"}
//    };
//    return formFields;
//}

// Function to get user input from form
function getUserInput() {

    // Object containing user input
    const userInput = {
        fname: $("#myForm #fname").val(),
        lname: $("#myForm #lname").val(),
        phone: $("#myForm #phone").val(),
        email: $("#myForm #email").val(),
        checkin: $("#myForm #checkin").val(),
        checkout: $("#myForm #checkout").val(),
        roomType: $('#myForm input[name="roomType"]:checked')
    };
    return userInput;
}