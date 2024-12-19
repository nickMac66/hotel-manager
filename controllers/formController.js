/* 
 * Name: formHandler.js
 * Description: JavaScript file for handling form submissions and related functionality. 
 * Author: NicMac
 * Date: October 16, 2024 
 */

$(document).ready(function () {

    // Add dynamic page content
    let pageContent = $("#home")[0];
    let formAction = "bookingDetails.html";
    pageContent.innerHTML = buildForm(formFields, formAction);

    $("#myForm").on("submit", function (event) {

        // Prevent form submission
        event.preventDefault();

        // Validate form data
        validateForm = validateForm();

        // Send form data to the server if its valid
        if (validateForm) {

            alert("the form is valid");

            // Select form and create an object containing form fields and their values
            let myForm = $("#myForm");
            let data = new FormData(myForm);

            // Send form data to the server
            $.ajax({
                url: '/', // URL to which the request is sent
                method: 'POST', // Method used for the request
                data: data, // Data being sent to the server
                processData: false, // Prevent jQuery from converting form data into a query string
                contentType: false, // Ensure the correct content type is set by the browser
                success: function (response) {
                    alert('.....Form data sent successfully.....');
                },
                error: function (xhr, status, error) {
                    alert('!!!!!Form data was NOT sent!!!!!');
                    console.error(error);
                }
            });

            // Prevent form submission if the data is invalid
        } else {
            event.preventDefault();
            alert("the form is not valid");
        }
    });
});