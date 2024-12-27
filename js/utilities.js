/*
 * Name: utilities.js
 * Description: JavaScript file containing utility functions for various purposes
 * Author: NicMac
 * Created On: October 13, 2024
 */

// Form field attributes
let label;
let type;
let id;
let name;
let value;

// Function accepts an object containing form fields and builds a form
function buildForm(formObject) {

    // Start building the form
    let form = `<form id="myForm" method="post"><table>`;

    // Access the current form field    
    for (let formField in formObject) {

        // Create an object containing the current form field and its attributes
        let fieldObject = formObject[formField];

        //**********************************************************************
        // Check if the current form field object contains nested objects, which
        // may include radio fields, select elements, etc. If no nested objects
        // are found, set the field attribute values.
        //**********************************************************************        
        for (let fieldObjectItem in fieldObject) {

            // Reference to the current field object item value
            let fieldObjectValue = fieldObject[fieldObjectItem];

            if (typeof fieldObjectValue === 'object') {
                console.log("field object value: " + fieldObjectValue);

                // Reference to the current field object
                nestedObject = fieldObjectValue;

                for (let fieldObjectItem in nestedObject) {

                    // Set attribute values to the current form field
                    initializeFieldAttributes(nestedObject, fieldObjectItem);
                }
                // Build the current form field                    
                form += `<tr><th><label for='${id}'>${label}</label></th>`;
                form += `<td><input type="${type}" id="${id}" name="${name}"></td>`;
                form += `<td><h5 id="${id}ErrMsg"></h5></td></tr>`;
                
            } else {
                // Set attribute values to the current form field
                initializeFieldAttributes(fieldObject, fieldObjectItem);
            }
        }
        // Build the current form field
        form += `<tr><th><label for='${id}'>${label}</label></th>`;
        form += `<td><input type="${type}" id="${id}" name="${name}"></td>`;
        form += `<td><h5 id="${id}ErrMsg"></h5></td></tr>`;
    }
    //**************************************************************************
    // Add the submit button and close the form
    //**************************************************************************
    form += '<tr><td><input type="submit" id="submitButton" name="submitButton"></td></tr>';
    form += '</table></form>';
    return form;
}

function initializeFieldAttributes(fieldObject, fieldObjectItem) {

    // Attribute value
    let currentItemValue = fieldObject[fieldObjectItem];

    // Handle the different attributes
    switch (fieldObjectItem) {
        case "label":
            label = currentItemValue;
            break;
        case "type":
            type = currentItemValue;
            break;
        case "id":
            id = currentItemValue;
            break
        case "name":
            name = currentItemValue;
            break;
        case "value":
            value = currentItemValue;
            break;
        default:
            alert("invalid field attribute");
            break;
    }
}