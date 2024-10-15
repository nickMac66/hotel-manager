/*
 * Name: utilities.js
 * Description: JavaScript file containing utility functions for various purposes
 * Author: NicMac
 * Created On: October 13, 2024
 * Last Modified: October 13, 2024
 */

function formGenerator(formData) {
    let tableHeader = " "; // Initialize an empty table header string

    // Start building the form
    let form = "<form>";
    form += "<table>";
    form += "<tr>"; // Start the first row of the table

    // Loop through each key in the formData object
    for (let obj in formData) {
        
        let formField = obj; // Get the current form field        
        let nestedObject = formData[obj]; // Get the nested object for the current form field
        let keys = Object.keys(nestedObject);
        let inputId = keys[0];

        // Loop through each key in the nested object
        for (let key in nestedObject) {
            let value = formData[formField][key]; // Get the value for the current key in the nested object
//            console.log(key);
//            console.log(value);                         
            
            if (key == "nextRow") {
                // If the key is "nextRow", close the current table row
                form += "</tr>";
            } else if (key == "inputType") {
                // If the key is "inputType", start a new table cell
                form += "<td>";
                
                // Use a switch statement to handle different input types
                switch (value) {
                    case "text":                        
                        form += `<input type="text" id="${inputId}" name="${inputId}">`
                        console.log(inputId);
                        break;
                    case "date":                        
                        form += `<input type="date" id="${inputId}" name="${inputId}">`
                        break;
                    case "radio":                        
                        form += `<input type="radio" id="${inputId}" name="${inputId}">`
                        break;
                    case "submit":                       
                        form += "<input type=submit>";
                        break;
                    default:
                        // Default case to handle unknown input types, create a text input field
                        form += `<input type="text" id="${inputId}" name="${inputId}">`
                        break;
                }
                form += "</td>"; // Close the table cell
            } else {
                // For other keys, create a table header with the value
                form += "<th>" + value + "</th>";
            }
        }
    }

    form += "</table>"; // Close the table
    form += "</form>"; // Close the form
    return form; // Return the completed form string
}