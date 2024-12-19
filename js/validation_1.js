/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input 
 * Author: NicMac
 * Created On: October 24, 2024
 */

// Constant checks if a radio selection has been made
//const radioUnchecked = $('#myForm input[name="roomType"]:checked').length === 0;

// Function validates a form
function validateForm() {
   
    // Set the form to be valid
    let isValid = true;

    // Get user input data from the form
    let userInput = getUserInput();

    // Check for empty form fields
    for (let field in userInput) {

        const isEmpty = (userInput[field] === "");
        const radioUnchecked = $('#myForm input[name="roomType"]:checked').length === 0;

        if (isEmpty) {
            isValid = false;
        }
        if (field === "roomType" && radioUnchecked) {
            console.log("radio unchecked");
        } else {
            console.log($('#myForm input[name="roomType"]:checked').val());
        }
    }
    return isValid;
}

//    const fieldsAreEmpty = (fname === "" || lname === "" || phone === "" || email === "" || checkin === "" || checkout === "");
//    const radioNotChecked = $('#myForm input[name="roomType"]:checked').length === 0;
//
//    if (radioNotChecked) {
//
//        $('h5[name="radioNotCheckedMsg"]').html('**Required').css("color", "red");
//        console.log("radio not checked");
//        isValid = false;
//
//    }
//
//    $("#myForm").find("*").each(function () {
//
//        const isEmpty = ($(this).val() === "");
//
//        let id = $(this).attr('id');
//
//        switch (id) {
//
//            case "fname":
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