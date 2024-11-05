/*
 * Name: utilities.js
 * Description: JavaScript file containing utility functions for various purposes
 * Author: NicMac
 * Created On: October 13, 2024
 */

// Form field attribute variables
let label = "";
let type = "";
let id = "";
let name = "";
let value = "";
let group = "";

function buildForm(formFields, formAction) {

    // Start building the form
    let form = `<form id="myForm" action="${formAction}">`;
    form += '<table>';
    form += '<tr>';

    // Access the current form field
    for (let formField in formFields) {

        // Define the current field as an object
        let fieldObject = formFields[formField];

        // Get the attributes/values from the current field
        getCurrentFieldAttributes(fieldObject);

        // Build the current field
        form += `<th>${label}</th>`;
        form += '<td>';
        form += `<input type="${type}" id="${id}" name="${name}">`;
        form += `<h5 id="${id}"></h5>`;
        form += '</td>';
        form += '</tr>';

    }

    // Add the submit button
    form += '<tr>';
    form += '<td>';
    form += '<input type="submit" name="submit">';
    form += '</td>';
    form += '</tr>';

    // Close the form
    form += '</table>';
    form += '</form>';

    return form;

}

/*
 * Name: getForm
 * Description: Processes the given form fields to extract and handle their attributes
 * Author: NicMac
 * Created On: November 2, 2024
 */

function getCurrentFieldAttributes(fieldObject) {

    // Access the attributes from the current form field
    for (let fieldAttribute in fieldObject) {

        // Get the current attribute value
        let attributeValue = fieldObject[fieldAttribute];

        // Handle the different attributes
        switch (fieldAttribute) {

            case "label":

                label = attributeValue;
                break;

            case "type":

                type = attributeValue;
                break;

            case "id":

                id = attributeValue;
                break

            case "name":

                name = attributeValue;
                break;

            case "value":

                value = attributeValue;
                break;

            case "group":

                group = attributeValue;
                break;

            default:

                alert("invalid field attribute");
                break;

        }
    }
}