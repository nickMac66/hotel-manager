/*
 * Name: bookingForm.js
 * Description: JavaScript file contains functions to initialize the booking form
 * Author: NicMac
 * Date: October 12, 2024
 */

// Object containing form fields
const formObject = {
    form: {id: "bookingForm", action: "/booking", method: "post"},
    fname: {label: "First name", input: "text", id: "fname", name: "fname"},
    lname: {label: "Last name", input: "text", id: "lname", name: "lname"},
    phone: {label: "Phone", input: "text", id: "phone", name: "phone"},
    email: {label: "Email", input: "text", id: "email", name: "email"},
    checkin: {label: "Check in", input: "date", id: "checkin", name: "checkin"},
    checkout: {label: "Check out", input: "date", id: "checkout", name: "checkout"},
    roomType: {
        basicRoom: {label: "Basic room", input: "radio", id: "basic", name: "roomType", value: "basic"},
        deluxeRoom: {label: "Deluxe room", input: "radio", id: "deluxe", name: "roomType", value: "deluxe"},
        luxuryRoom: {label: "Luxury room", input: "radio", id: "luxury", name: "roomType", value: "luxury"}
    }
};

buildForm = () => {
    let form = `<form id="${formObject.form.id}" action="${formObject.form.action}" method="${formObject.form.method}"><table>`;

    // Initialize an object representing each form field with its attributes
    for (let key in formObject) {
        
        let fieldObject = formObject[key];
        
        // Initialize attributes for the current form field
        for (let key in fieldObject) {
            console.log("attribute: " + key);

            switch (key) {
                case "label":
                    const label = fieldObject[key];
                    form += `<tr><th><label for='${fieldObject.id}'></label></th>`;
                    break;
                case "input":
                    form += `<td><input type='${fieldObject.input}' id='${fieldObject.id}' name='${fieldObject.name}'</td>`;
                    form += `<td><span id='${fieldObject.id}+ErrMsg' style='display:none;'>**Required field</span></td></tr>`;
                    break;
                default:
                    "invalid attribute";
            }
        }
    }
    // Add the submit button and close the form    
    form += '<tr><td colspan="3"><input type="submit" action="/bookingDetails" id="submitButton" name="submitButton"></td></tr>';        
    return form;
};

module.exports = {
    buildForm
};

