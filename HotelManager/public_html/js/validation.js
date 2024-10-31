/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input 
 * Author: NicMac
 * Created On: October 24, 2024
 */

function validateForm() {

    // Variables to hold input field attributes and values
    let inputLabel = "";
    let inputType = "";
    let inputId = "";
    let inputName = "";
    let userInput = "";    
    let isValid = true;

    // Get the user input & associated labels from the form
    $("#myForm th, #myForm input").each(function () {

        
        // Boolean variables for validation checks
        const isRadioInput = (inputType === "radio"); // Checks is the input type is radio
        const radioIsUnchecked = ($(`input[name='${inputName}']:checked`).length === 0); // Checks if no radio buttons are checked
        const emptyFields = (`${userInput}` === ""); // Checks if the user input is empty
        const isNotSubmitButton = (`${inputType}` !== "submit"); // Checks if the input type is not submit

        // Input labels
        if ($(this).is("th")) {

            inputLabel = $(this).text();

        // User input
        } else {

            // Current input field attributes
            inputType = $(this).attr('type');
            inputId = $(this).attr('id');
            inputName = $(this).attr('name');
            userInput = $(this).val();

            // Check for empty
            if (emptyFields && isNotSubmitButton) {

                // Empty field error message
                $(`h5#${inputId}`).html(`**${inputLabel} is required`).css("color", "red");
                isValid = false;

            }

            if (isRadioInput && radioIsUnchecked) {

                // No radio checked error message
                $("h5#radioError").html(`**${inputLabel} is required`).css("color", "red");
                isValid = false;

            }
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