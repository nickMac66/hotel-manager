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
            case "lname":
                if (!namePattern.test(userInput[field])) {
                    isValid = false;
                    console.log("invalid fname or lname");
                }
                break;
            case "phone":
                if (!phonePattern.test(userInput[field])) {
                    isValid = false;
                    console.log("invalid phone");
                }
                break;
            case "email":
                if (!emailPattern.test(userInput[field])) {
                    isValid = false;
                    console.log("invalid email");
                }
                break;
            default:
                console.log("default value");
                break;
        }
    }
    return isValid;
}


//
//                const fname = $("#myForm #fname").val();
//                const fnamepattern = /^[a-zA-Z]{1,50}$/;
//                const fnameInvalid = (!fnamepattern.test(fname));
//
//                if (isEmpty) {
//
//                    $(`h5#${id}errorMsg`).html('**Required field').css("color", "red");
//                    console.log("first name is empty");
//                    isValid = false;
//
//                } else if (fnameInvalid) {
//
//                    $(`h5#${id}errorMsg`).html('**Invalid').css("color", "red");
//                    console.log("first name is invalid");
//                    isValid = false;
//
//                }
//                                
//                break;
//
//            case "lname":
//
//                const lname = $("#myForm #lname").val();
//                const lnamePattern = /^[a-zA-Z]{1,50}$/;
//                const lnameInvalid = (!lnamePattern.test(lname));
//
//                if (isEmpty) {
//
//                    $(`h5#${id}errorMsg`).html('**Required').css("color", "red");
//                    console.log("last name is empty");
//                    isValid = false;
//
//                } else if (lnameInvalid) {
//
//                    $(`h5#${id}errorMsg`).html('**Invalid').css("color", "red");
//                    console.log("first name is invalid");
//                    isValid = false;
//
//                }
//
//                break;
//
//            case "phone":
//                
//                const phone = $("#myForm #phone").val();
//                const phonePattern = /^\d{10}$/;                
//                const phoneInvalid = (!phonePattern.test(phone));
//
//                if (isEmpty) {
//
//                    $(`h5#${id}errorMsg`).html('**Required').css("color", "red");
//                    console.log("phone is empty");
//                    isValid = false;
//
//                } else if (phoneInvalid) {
//
//                    $(`h5#${id}errorMsg`).html('**Invalid').css("color", "red");
//                    console.log("phone is invalid");
//                    isValid = false;
//
//                }
//
//                break;
//
//            case "email":
//
//                const email = $("#myForm #email").val();
//                const emailPattern = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;                
//                const emailInvalid = (!emailPattern.test(email));
//
//                if (isEmpty) {
//
//                    $(`h5#${id}errorMsg`).html('**Required').css("color", "red");
//                    console.log("email is empty");
//                    isValid = false;
//
//                } else if (emailInvalid) {
//
//                    $(`h5#${id}errorMsg`).html('**Invalid').css("color", "red");
//                    console.log("email is invalid");
//                    isValid = false;
//
//                }
//
//                break;
//
//            case "checkin":
//
//                const checkin = $("#myForm #checkin").val();
//
//                if (isEmpty) {
//
//                    $(`h5#${id}errorMsg`).html('**Required').css("color", "red");
//                    console.log("check in is empty");
//                    isValid = false;
//
//                }
//
//                break;
//
//            case "checkout":
//
//                const checkout = $("#myForm #checkout").val();
//
//                if (isEmpty) {
//
//                    $(`h5#${id}errorMsg`).html('**Required').css("color", "red");
//                    console.log("checkout is empty");
//                    isValid = false;
//
//                }
//
//                break;
//
//            default:
//
//                break;
//
//        }
//    });
//    console.log("validated");
//    return isValid;
//}