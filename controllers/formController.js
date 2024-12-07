/* 
 * Name: formHandler.js
 * Description: JavaScript file for handling form submissions and related functionality. 
 * Author: NicMac
 * Created On: October 16, 2024 
 */

$(document).ready(function () {

    $("#myForm").on("submit", function (event) {

        event.preventDefault();

        // Validate the form data
        validateForm = validateForm();

        // Send the form data to the server if its valid
        if (validateForm) {            
            
            alert("the form is valid");            
            
            // Select the form and create an object containing form fields and their values
            let myForm = $("#myForm");
            let data = new FormData(myForm);
            
            $.ajax({
                url: '/',
                method: 'POST',
                data: data,
                processData: false,
                contentType: false,
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