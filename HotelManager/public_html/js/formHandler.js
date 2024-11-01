/* 
 * Name: formHandler.js
 * Description: JavaScript file for handling form submissions and related functionality.
 *  This file accepts user input from the form and processes it accordingly.
 * Author: NicMac
 * Created On: October 16, 2024 
 */

$( document ).ready(function() {

    $("#myForm").submit(function (event) {

        formIsValid = validateForm();
        console.log(formIsValid);

        if (formIsValid) {

            // Submit the form
            alert("the form is valid");

        } else {

            // Prevent the default form action
            event.preventDefault();
            alert("the form is not valid");

        }
    });
});