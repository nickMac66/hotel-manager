/* 
 * Name: formHandler.js
 * Description: JavaScript file for handling form submissions and related functionality. 
 * Author: NicMac
 * Date: October 16, 2024 
 */

//$(document).ready(function () {    

//    // Display the HTML booking form on the home page
//    let pageContent = $("#home")[0];                // Select 'home' container on the main page     
//    let formObject = initializeFormObject();        // Initialize the form object       
//    pageContent.innerHTML = buildForm(formObject);  // Build the form with the form object and dynamically display it on the main page
//
//    // Handle the form submission
//    $("#myForm").on("submit", function (event) {
//        
//        // Prevent default form submission behavior
//        event.preventDefault();
//        
//        // Validate the form data
//        isValidForm = validateForm();
//        
//        // Send the form data to the server if it's valid
//        if (isValidForm) {
//            
//            alert("valid form: " + isValidForm);
//            
//            // Select the form and create an object containing form fields and their values
//            let myForm = $("#myForm");
//            let formData = new FormData(myForm);            
//
//            // Send form data to the server
//            $.ajax({
//                url: '/',                       // URL to which the request is sent
//                method: 'POST',                 // Method used for the request
//                data: formData,                 // Data being sent to the server
//                processData: false,             // Prevent jQuery from converting form data into a query string
//                contentType: false,             // Ensure the correct content type is set by the browser
//                success: function (response) {
//                    alert('.....Form data sent successfully.....');
//                },
//                error: function (xhr, status, error) {
//                    alert('!!!!!Form data was NOT sent!!!!!');
//                    console.error(error);
//                }
//            });
//            
//        } else {
//            // Prevent form submission if the data is invalid
//            event.preventDefault();
//            alert("is the form valid? " + isValidForm);
//        }
//    });
//});