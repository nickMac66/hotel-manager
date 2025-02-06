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

    // If updating a booking, pre-fill the 'booking id' field
    if (formAction === 'update') {
        form += `<tr><th><label for='bookingId'>Booking Id</label></th>`;
        form += `<td><input type='text' id='bookingId' name='bookingId' value='${bookingDetails.booking._id}'></td>`;
    }

    // Add form fields
    for (let key in formObject) {
        let { label, input, id, name } = formObject[key];
        let value = bookingDetails[key] || '';

        form += `<tr><th><label for='${id}'>${label}</label></th>`;
        form += `<td><input type='${input}' id='${id}' name='${name}' value='${value}'></td>`;
    }

    // Add the submit button and close the form
    form += `<tr><td colspan="3"><input type="submit" action="/${formAction}" id="submitButton" name="submitButton"></td></tr></table>`;
    return form;
};

module.exports = { buildForm };