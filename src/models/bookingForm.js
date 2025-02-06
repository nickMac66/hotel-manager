/*
 * Name: bookingForm.js
 * Description: JavaScript file contains function to initialize the booking form
 * Author: NicMac
 */

// Object containing form fields
const formObject = {
    fname: { label: "First name", input: "text", id: "fname", name: "fname", value: "" },
    lname: { label: "Last name", input: "text", id: "lname", name: "lname", value: "" },
    phone: { label: "Phone", input: "text", id: "phone", name: "phone", value: "" },
    email: { label: "Email", input: "text", id: "email", name: "email", value: "" },
    checkin: { label: "Check in", input: "date", id: "checkin", name: "checkin", value: "" },
    checkout: { label: "Check out", input: "date", id: "checkout", name: "checkout", value: "" },
};

/**
 * Builds the booking form HTML
 * @param {Object} bookingDetails - Existing booking details to pre-fill the form
 * @param {String} formAction - The form action URL
 * @returns {String} - The HTML string for the booking form
 */
const buildForm = (bookingDetails = {}, formAction) => {
    let form = `<form id="bookingForm" action="${formAction}" method="post"><table>`;

    if (Object.keys(bookingDetails).length > 0) {
        console.log(bookingDetails.book);
        form += `<tr><th><label for='bookingId'>Booking Id</label></th>`;
        form += `<td><input type='text' id='bookingId' name='bookingId' value='${bookingDetails.booking._id}' readonly></td>`;
    }

    for (let key in formObject) {
        let attribute = formObject[key]

        form += `<tr><th><label for='bookingId'>${attribute.label}</label></th>`;
        form += `<td><input type='${attribute.input}' id='${attribute.id}' name='${attribute.name}' value='${attribute.value}'></td>`;
    }

    // if (formAction === 'update') {
    //     form += `<tr><th><label for='bookingId'>Booking number</label></th>`;
    // form += `<td><input type='text' id='bookingId' name='bookingId' value='${bookingDetails.booking._id}' readonly></td>`;
    //     // form += `<td name='id'>${bookingDetails.booking._id}</td></tr>`;

    // }

    // // Initialize an object representing each form field with its attributes
    // for (let key in formObject) {

    //     let fieldObject = formObject[key];

    //     // Initialize attributes for the current form field & add them to the form
    //     for (let key in fieldObject) {

    //         switch (key) {
    //             case "label":
    //                 const label = fieldObject[key];
    //                 form += `<tr><th><label for='${fieldObject.id}'>${label}</label></th>`;
    //                 break;
    //             case "input":

    //                 // Populate the form fields with booking details if updating an existing booking
    //                 if (formAction === 'update') {

    //                     let fieldId = fieldObject.id;
    //                     let fieldValue = bookingDetails.booking[fieldId];

    //                     form += `<td><input type='${fieldObject.input}' id='${fieldObject.id}' name='${fieldObject.name}' value='${fieldValue}'</td>`;

    //                 } else {
    //                     // No value attribute needed for new booking
    //                     form += `<td><input type='${fieldObject.input}' id='${fieldObject.id}' name='${fieldObject.name}'</td>`;
    //                     form += `<td><span id='${fieldObject.id}+ErrMsg' style='display:none;'>**Required field</span></td></tr>`;
    //                 }
    //             default:
    //                 "invalid attribute";
    //         }
    //     }
    // }
    // Add the submit button and close the form
    form += `<tr><td colspan="3"><input type="submit" action="/${formAction}" id="submitButton" name="submitButton"></td></tr></table>`;

    return form;
};

module.exports = {
    buildForm
};