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

function validateForm(userInput) {

    let isValid = true;

    return isValid;
}
;
module.exports = {
    validateForm
};

//    let isValid = true; // Set the form to be valid    
//    let userInput = getUserInput(); // Get user input data from the form
//
////******************************************************************************
//// Check for empty input fields
////******************************************************************************
//
//    const radioUnchecked = $('#myForm input[name="roomType"]:checked').length === 0; // Ensure at least one radio field is checked
//
////    if (radioUnchecked) {
////        $(`h5[name="roomType"]`).html('**Required field').css("color", "red");
////        isValid = false;
////    }
//
//    // Veryify values for the remaining fields
//    for (let field in userInput) {
//        
//        let id = field;
//        let isEmpty = (userInput[field] === "");
//
//        if (isEmpty) {
//            $(`h5#${id}ErrMsg`).html('**Required field').css("color", "red");
//            isValid = false;            
//        } else {
//            
//            //******************************************************************
//            // Validate the format of user inputs
//            //******************************************************************
//            
//            switch (field) {
//                case "fname":
//                    if (!namePattern.test(userInput[field])) {
//                        $(`h5#${field}errorMsg`).html('**Invalid').css("color", "red");
//                        isValid = false;
//                        console.log("invalid fname or lname");
//                    }
//                case "lname":
//                    if (!namePattern.test(userInput[field])) {
//                        $(`h5#${field}errorMsg`).html('**Invalid').css("color", "red");
//                        isValid = false;
//                        console.log("invalid fname or lname");
//                    }
//                    break;
//                case "phone":
//                    if (!phonePattern.test(userInput[field])) {
//                        $(`h5#${field}errorMsg`).html('**Invalid').css("color", "red");
//                        isValid = false;
//                        console.log("invalid phone");
//                    }
//                    break;
//                case "email":
//                    if (!emailPattern.test(userInput[field])) {
//                        $(`h5#${field}errorMsg`).html('**Invalid').css("color", "red");
//                        isValid = false;
//                        console.log("invalid email");
//                    }
//                    break;
//                default:
//                    break;
//            }
//        }
//    }
//    return isValid;
//}