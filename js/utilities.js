/*
 * Name: utilities.js
 * Description: JavaScript file containing utility functions for various purposes
 * Author: NicMac
 * Created On: October 13, 2024
 */

// Form field attributes
let form = `<form id="myForm" method="post"><table>`;
let label, type, id, name, value;
let counter = 0;

/*
 * Function to accept an object containing form data and build a form.
 * @param {Object} formObject - The object containing form field data.
 * @returns {string} - The HTML string representing the form
 */
function buildForm(formObject) {
    // Ensures that an extra form field isn't displayed
    let count = 1;

    // Access each form field
    for (let currentField in formObject) {
        
        // Get the length of the form object
        let formObjectLength = Object.keys(formObject).length;

        // Create an object for each form field
        let fieldObject = formObject[currentField];

        // Initialize the form fields
        initializeFormFields(fieldObject);

        // Prevent an extra field from being displayed
        if (count < formObjectLength) { 
            // Build the HTML for the form field
            form += `<tr><th><label for='${id}'>${label}</label></th>`;
            form += `<td><input type="${type}" id="${id}" name="${name}"></td>`;
            form += `<td><span id="${name}+ErrMsg" style="display:none;">**Required field</span></td></tr>`;
            count++;
        }
    }
    // Add the submit button and close the form    
    form += '<tr><td><input type="submit" id="submitButton" name="submitButton"></td></tr>';
    form += '</table></form>';
    return form;
}

/*
 * Function to initialize form fields
 * @param {Object} fieldObject - The object containing form field data.
 */
function initializeFormFields(fieldObject) {

    // Access the field object keys
    for (let fieldKey in fieldObject) {

        // Retrieve the value associated with the current key
        let fieldValue = fieldObject[fieldKey];

        // Check if the current field is a group field containing nested elements
        // such as radio buttons or select dropdowns
        if (typeof fieldValue === 'object') {

            // Reference to the current group field object
            let groupFieldObject = fieldValue;

            // Build the group field
            initializeGroupFields(fieldObject, groupFieldObject);

        } else {
            // Initialize values for non-nested fields
            initializeFieldValues(fieldObject, fieldKey);
        }
    }
}

/*
 * Function to build and initialize form fields for a group field object.
 * @param {Object} parentObject - The parent object containing the group field objects
 * @param {Object} groupFieldObject - The nested object containing grouped form fields
 */
function initializeGroupFields(parentObject, groupFieldObject) {

    // Increment the counter for each processed group field. 
    // The counter ensures that an error message is added after the last field
    counter++;

    // Get the total number of fields in the parent object
    parentObjectLength = Object.keys(parentObject).length;

    // Access the attributes of the group field object
    for (let fieldAttribute in groupFieldObject) {

        // Initialize field values for the current attribute
        initializeFieldValues(groupFieldObject, fieldAttribute);
    }

    // Build the HTML for the form field
    form += `<tr><th><label for='${id}'>${label}</label></th>`;
    form += `<td><input type="${type}" id="${id}" name="${name}"></td>`;

    // Add an error message after the last group field
    if (counter === parentObjectLength) {
        form += `<td><span id="${name}+ErrMsg" style="display:none;">**Please make a selection</span></td></tr>`;        
        counter = 0;
    }
}

/*
 * Function to initialize field values based on their attributes
 * @param {Object} fieldObject - The object containing the form field data.
 * @param {string} fieldAttribute
 */
function initializeFieldValues(fieldObject, fieldAttribute) {

    // Value of the current field attribute
    let fieldAttributeValue = fieldObject[fieldAttribute];

    // Handle the different attributes
    switch (fieldAttribute) {
        case "label":
            label = fieldAttributeValue;
            break;
        case "type":
            type = fieldAttributeValue;
            break;
        case "id":
            id = fieldAttributeValue;
            break;
        case "name":
            name = fieldAttributeValue;
            break;
        case "value":
            value = fieldAttributeValue;
            break;
        default:
            confirm("invalid field attribute");
            break;
    }
}