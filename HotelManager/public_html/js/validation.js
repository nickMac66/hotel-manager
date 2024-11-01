/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input 
 * Author: NicMac
 * Created On: October 24, 2024
 */

function validateForm() {

    let inputLabel = "";
    let isValid = true;

    // Get the user input & associated labels from the form
    $("#myForm th, #myForm input").each(function () {

        // Variables to hold input field attributes and values        
        let inputType = $(this).attr('type');
        let inputName = $(this).attr('name');
        let userInput = $(this).val();

        // Constant checks for empty input fields
        const noInput = (inputType !== "submit" || userInput === "" || ($(`input[name='${inputName}']:checked`).length === 0));

        // Input labels
        if ($(this).is("th")) {

            inputLabel = $(this).text();
            
        }
        // Display an error message if there are empty input fields
        if (noInput) {

            // Error message
            $(`h5#${inputName}`).html(`**${inputLabel} is required`).css("color", "red");
            
            // The form is not valid
            isValid = false;
            
        }
    });

    return isValid;
}

















//            console.log("field: " + inputName + "is valid?: " + isValid);
//
//            // Check for empty fields
//            if (userInput === isEmpty && inputType !== "radio") {
//
//                // Empty field error message
//                $(`h5#${inputId}`).html(`**${inputLabel} is required`).css("color", "red");
//
//                // The form is not valid
//                isValid = false;
//
//            } else if (inputType === "radio") {
//
//                inputName = $(this).attr('name');
////                console.log("radio input name: " + inputName);
//
//                if ($(inputName).prop("checked", true)) {
//
//                    console.log("a selection has been made");
//
//                } else {
//
//                    console.log("no selection has been made");
//                    
//                    isValid = false;
//
//                }
//
//            }