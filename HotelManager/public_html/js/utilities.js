/*
 * Name: utilities.js
 * Description: JavaScript file containing utility functions for various purposes
 * Author: NicMac
 * Created On: October 13, 2024
 * Last Modified: October 13, 2024
 */

function formGenerator(formData) {
    console.log("function called");

// Start building the form
    let form = '<form id="form">';
    form += '<table>';
    form += '<tr>';
    // Loop through each form field
    for (let formField in formData) {

        // Get the form field object containing the input field attributes
        let formFieldObject = formData[formField];

        // Loop through the keys in the current form field object
        for (let key in formFieldObject) {

            // Get the value for the current key in the form field object
            let value = formData[formField][key];

            if (key == "nextRow") {

                // Close the current table row
                form += "</tr>";
            }

            if (key == "value") {

                // Create a table header with the value
                form += "<th>" + value + "</th>";
            }

            if (key == "inputType") {

                // Start a new table cell
                form += "<td>";

                // Handle the different input types
                switch (value) {

                    case "text":
                        form += `<input type="text" id="${formField}" name="${formField}">`;
                        break;

                    case "date":
                        form += `<input type="date" id="${formField}" name="${formField}">`;
                        break;

                    case radio:
//                        let name = "";
//                        let value = "";
//                                                
                        // Get the radio fields
                        for (let radioField in radio) {

                            // Create a reference to the current radio field object
                            let radioFieldObject = radio[radioField];
                            let radioName = "";
                            let radioValue = "";

                            // Get the keys from the current radio field object
                            for (let key in radioFieldObject) {

                                if (key == "name") {
                                    radioName = radioFieldObject[key];
                                    console.log("radio name: " + radioName);
                                } else {
                                    radioValue = radioFieldObject[key];
                                    form += `<input type="radio" id="${radioField}" name="${radioName}" value="${radioValue}"`;
                                    form += `<label for="${radioField}">${radioValue}</label><br>`;
                                }
                            }
                        }
                        break;

                    case "submit":
                        form += '<input type="submit" name="submit">';
                        break;

                    default:
                        // Default case to handle unknown input types, create a text input field
                        form += '<input type="text" id="default" name="default">';
                        break;
                }

                form += "</td>"; // Close the table cell
            }
        }
    }

    form += "</table>"; // Close the table
    form += "</form>"; // Close the form
    return form; // Return the completed form string
}