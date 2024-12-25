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

    //**************************************************************************
    // Access the current form field
    //**************************************************************************
    for (let formField in formObject) {

        let fieldObject = formObject[formField]; // Create an object containing the current form field and its attributes                                                     

        getCurrentFieldAttributes(fieldObject); // Get the attributes/values from the current field
        //**********************************************************************
        // Build the current form field
        //**********************************************************************

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

/*
 * Name: getForm
 * Description: Processes each form field object to extract and handle their attributes
 * Author: NicMac
 * Created On: November 2, 2024
 */

function getCurrentFieldAttributes(fieldObject) {

    // Access the data from the current field object
    for (let fieldData in fieldObject) {


        //************************************************************************
        // Check if the current item is an object and get extract the data.
        // If it's not an object, set the value of the current field attribute.
        //************************************************************************        
        if (typeof current === 'object') {
            console.log("radio field: " + fieldData);
        } else {
            console.log("current attribute: " + fieldData);
            setAttributeValues(fieldObject, fieldData);

        }

//        if (typeof current === 'object') {
//            console.log("radio field: " + fieldData);
//
//            // Get attributes from the current field object and set their values
//            for (let fieldData in current) {
//                console.log("radio field attributes: " + fieldData);
//                setAttributeValues(fieldData);
//            }
        // Set the current field attribute values
//        } else {
//            console.log("current attribute: " + fieldData);
//            setAttributeValues(fieldData);
//        }
    }
}

function setAttributeValues(fieldObject, fieldData) {

    // Attribute value
    let current = fieldObject[fieldData];
    console.log("current attribute value: " + current);

    // Handle the different attributes
    switch (fieldData) {
        case "label":
            label = current;
            break;
        case "type":
            type = current;
            break;
        case "id":
            id = current;
            break
        case "name":
            name = current;
            break;
        case "value":
            value = current;
            break;
//        default:
//            alert("invalid field attribute");
//            break;
    }
}