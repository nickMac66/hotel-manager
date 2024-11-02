/*
 * Name: utilities.js
 * Description: JavaScript file containing utility functions for various purposes
 * Author: NicMac
 * Created On: October 13, 2024
 * Last Modified: October 13, 2024
 */

function generateForm(formFields, formFieldsPerRow, formAction) {

    // Start building the form
    let form = `<form id="myForm" action="${formAction}">`;
    form += '<table>';
    form += '<tr>';

    // Access the current form field
    for (let formField in formFields) {

        // Current form field attributes
        let label = "";
        let inputType = "";
        let id = "";
        let name = "";

        // Get the current form field as an object
        let formFieldObject = formFields[formField];

        // Access the attributes of the current form field
        for (let fieldAttribute in formFieldObject) {

            // Get the current attribute value
            let fieldAttributeValue = formFields[formField][fieldAttribute];

            switch (fieldAttribute) {

                case "label":

                    label = fieldAttributeValue;
                    break;

                case "inputType":

                    inputType = fieldAttributeValue;
                    break;

                case "id":

                    id = fieldAttributeValue;
                    break

                case "name":

                    name = fieldAttributeValue;
                    break;

                default:

                    alert("invalid field attribute");
                    break;

            }
        }

        form += `<th>${label}</th>`;
        form += '<td>';
        form += `<input type="${inputType}" id="${id}" name="${name}">`;
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

    form += '</table>';
    form += '</form>';
//    console.log(form);
    return form;

}






























///*
// * Name: utilities.js
// * Description: JavaScript file containing utility functions for various purposes
// * Author: NicMac
// * Created On: October 13, 2024
// * Last Modified: October 13, 2024
// */
//
//function generateForm(formFields, formAction) {
//
//    // Start building the form
//    let form = `<form id="myForm" action="${formAction}">`;
//    form += '<table>';
//    form += '<tr>';
//
//    // Access the current form field
//    for (let formField in formFields) {
//
//        // Define the current form field as an object
//        let formFieldObject = formFields[formField];
//
//        // Get the attributes from the current form field
//        for (let fieldAttribute in formFieldObject) {
//
//            // Define the attribute values
//            let fieldAttributeValue = formFields[formField][fieldAttribute];
//
//            if (fieldAttribute == "nextRow") {
//
//                // Close the current table row
//                form += "</tr>";
//            }
//
//            if (fieldAttribute == "value") {
//
//                // Create a table header with the value
//                form += "<th>" + fieldAttributeValue + "</th>";
//            }
//
//            if (fieldAttribute == "inputType") {
//
//                // Start a new table cell
//                form += "<td>";
//
//                // Handle the different input types
//                switch (fieldAttributeValue) {
//
//                    case "text":
//
//                        form += `<input type="text" id="${formField}" name="${formField}">`;
//                        // Error message for invalid user input
//                        form += `<h5 id="${formField}"> </h5>`;
//                        break;
//
//                    case "date":
//
//                        form += `<input type="date" id="${formField}" name="${formField}">`;
//                        // Error message for invalid user input
//                        form += `<h5 id="${formField}"> </h5>`;
//                        break;
//
//                    case radio:
//
//                        // Get the radio fields
//                        for (let radioField in radio) {
//
//                            // Create a reference to the current radio field object
//                            let radioFieldObject = radio[radioField];
//                            let nameAttribute = "";
//                            let valueAttribute = "";
//
//                            // Get the keys from the current radio field object
//                            for (let fieldAttribute in radioFieldObject) {
//
//                                if (fieldAttribute == "name") {
//
//                                    // Set the name attribute for the current radio field
//                                    nameAttribute = radioFieldObject[fieldAttribute];
//
//                                } else {
//
//                                    // Set the value attribute for the current radio field
//                                    valueAttribute = radioFieldObject[fieldAttribute];
//                                    form += `<input type="radio" id="${radioField}" name="${nameAttribute}" value="${valueAttribute}"`;
//
//                                    // Error message for no radio option selected
//
//                                    form += `<label for="${radioField}">${valueAttribute}</label><br>`;
//                                }                              
//                            }                                                                                    
//                        }
//                        
//                        form += `<h5 id="${formField}"></h5>`;
//                        
//                        break;
//
//                    case "submit":
//                        formAction =
//                                form += '<input type="submit" name="submit">';
//                        break;
//
//                    default:
//                        // Default case to handle unknown input types, create a text input field
//                        form += '<input type="text" id="default" name="default">';
//                        break;
//                }
//
//                form += "</td>"; // Close the table cell           
//            }
//        }
//    }
//
//    form += "</table>";
//    form += "</form>";
////    console.log(form);
//    return form; // Return the completed form
//
//}
//
//function generateLabels () {
//    
//    
//    
//}

























