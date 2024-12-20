/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input
 * Author: NicMac
 * Created On: October 24, 2024
 */

// Valid patterns for validating user input
const namePattern = /^[a-zA-Z]{1,50}$/;
const phonePattern = /^\d{10}$/;
const emailPattern = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// Checks if a radio button has been selected


// Function validates a form
function validateForm() {
    // Set the form to be valid
    let isValid = true;

    // Get user input data from the form
    let userInput = getUserInput();

    // Iterate through form elements
    for (let field in userInput) {

        let isEmpty = (userInput[field] === "");

        //*********************************************************************
        // Check for empty form fields
        //*********************************************************************
        if (isEmpty) {
            $(`h5#${field}errorMsg`).html('**Required field').css("color", "red");
            isValid = false;
        }

        // Ensure at least one radio field is checked
        const radioUnchecked = $('#myForm input[name="roomType"]:checked').length === 0;
        if (radioUnchecked) {
            $(`h5[name="radioErrorMsg"]`).html('**Required field').css("color", "red");
            isValid = false;
        } else {
            console.log($('#myForm input[name="roomType"]:checked').val());
        }

        //**********************************************************************
        // Validate the format of user inputs
        //**********************************************************************
        switch (field) {
            case "fname":
                if (!namePattern.test(userInput[field])) {
                    $(`h5#${field}errorMsg`).html('**Invalid').css("color", "red");
                    isValid = false;
                    console.log("invalid fname or lname");
                }
            case "lname":
                if (!namePattern.test(userInput[field])) {
                    $(`h5#${field}errorMsg`).html('**Invalid').css("color", "red");
                    isValid = false;
                    console.log("invalid fname or lname");
                }
                break;
            case "phone":
                if (!phonePattern.test(userInput[field])) {
                    $(`h5#${field}errorMsg`).html('**Invalid').css("color", "red");
                    isValid = false;
                    console.log("invalid phone");
                }
                break;
            case "email":
                if (!emailPattern.test(userInput[field])) {
                    $(`h5#${field}errorMsg`).html('**Invalid').css("color", "red");
                    isValid = false;
                    console.log("invalid email");
                }
                break;
            default:                
                break;
        }
    }
    return isValid;
}