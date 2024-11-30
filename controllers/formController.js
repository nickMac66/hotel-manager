/* 
 * Name: formHandler.js
 * Description: JavaScript file for handling form submissions and related functionality.
 *  This file accepts user input from the form and processes it accordingly.
 * Author: NicMac
 * Created On: October 16, 2024 
 */

$(document).ready(function () {

    $("#myForm").click()(function (event) {

        console.log("submitted...");

        validateForm = validateForm();

        if (validateForm) {

            // Submit the form
            alert("the form is valid");

            $("#myForm").submit();

        } else {

//         Prevent the default form action
            event.preventDefault();
            alert("the form is not valid");

        }
    });
});

function addFormDataToDb() {

    console.log("adding form data to db...");
    
}

module.exports = {addFormDataToDb};




//            let fname = $('#myForm input[id="fname"]').val();
//            let lname = $('#myForm input[id="fname"]').val();
//            let phone = $('#myForm input[id="fname"]').val();
//            let email = $('#myForm input[id="fname"]').val();
//            let checkin = $('#myForm input[id="fname"]').val();
//            let checkout = $('#myForm input[id="fname"]').val();
//            let roomType = $('#myForm input[id="roomType"]:checked').val();