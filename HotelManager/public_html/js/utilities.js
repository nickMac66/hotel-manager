/* 
 * Name: utilities.js 
 * Description: JavaScript file containing utility functions for various purposes 
 * Author: NicMac 
 * Created On: October 13, 2024 
 * Last Modified: October 13, 2024 
 */

function formGenerator(formData) {
    
    let tableHeader = " ";

    // Start building the form
    let form = "<form>";
    form += "<table>";

    // Create the first row of the table
    form += "<tr>";

    // Loop through each key in the formData object
    for (let obj in formData) {
        let formField = obj;  // Get the current form field
        let nestedObject = formData[obj];  // Get the nested object for the current form field

        // Loop through each key in the nested object
        for (let key in nestedObject) {
            let value = formData[formField][key];  // Get the value for the current key in the nested object
            console.log(key);
            console.log(value);  

            if (key == "nextRow") {
                form += "</tr>" // Close the current table row if the key is "nextRow"
            } else if (key == "inputType") {
                form += "<td>"; // Start a new table cell if the key is  "inputType"

                // Use a switch statement to handle different input types
                switch (value) {
                    case "text":
                        form += "<input type=text id=" + key + "name=" + key + ">";
                        break;
                    case "date":
                        form += "<input type=date id=" + key + "name=" + key + ">";
                        break;
                    case "radio":
                        form += "<input type=radio id=" + key + "name=" + key + ">";
                        break;
                    case "submit":
                        form += "<input type=submit id=" + key + "name=" + key + ">";
                        break;
                    default:
                        form += "<input type=text id=" + key + "name=" + key + ">";
                        break;
                }

                form += "</td>";
            } else {
                form += "<th>" + value + "</th>";
            }
        }
    }

    // End the table and form
    form += "</tr>";
    form += "</table>";
    form += "</form>";

    return form;  // Return the completed form string
}