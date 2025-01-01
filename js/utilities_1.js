/*
 * Name: utilities.js
 * Description: JavaScript file containing utility functions for various purposes
 * Author: NicMac
 * Created On: October 13, 2024
 */

// Form field attributes
let form;
let label;
let type;
let id;
let name;
let value;

// Function accepts an object containing form fields and builds a form
function buildForm(formObject) {

    // Start building the form
    form = `<form id="myForm" method="post"><table>`;

    // Access the current form field    
    for (let fieldObject in formObject) {

        // Create an object for each form field
        fieldObject = formObject[fieldObject];

        fieldObjectLength = Object.keys(fieldObject).length;

        // Initialize the current field
        initializeFormFields(fieldObject);

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

function initializeFormFields(fieldObject) {

    // Access the current field attributes
    for (let fieldData in fieldObject) {

        // Check if the current field item contains a nested object with grouped 
        // form elements like radio buttons, select elements, etc
        let nestedObject = (typeof fieldObject[fieldData] === 'object');

        if (nestedObject) {

            objectLength = Object.keys(fieldObject).length;

            let nestedFieldObject = fieldObject[fieldData];

            for (let fieldAttribute in nestedFieldObject) {

                initializeFieldAttributes(nestedFieldObject, fieldAttribute);
            }
            // Build the current form field                    
            form += `<tr><th><label for='${id}'>${label}</label></th>`;
            form += `<td><input type="${type}" id="${id}" name="${name}"></td>`;
            form += `<td><h5 id="${id}ErrMsg"></h5></td></tr>`;
        } else {
            let fieldAttribute = fieldData;
            initializeFieldAttributes(fieldObject, fieldAttribute);
        }
    }
}

function initializeFieldAttributes(fieldObject, fieldAttribute) {

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
        default:
            alert("invalid field attribute");
            break;
    }
}