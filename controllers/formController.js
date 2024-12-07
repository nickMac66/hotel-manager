/* 
 * Name: formHandler.js
 * Description: JavaScript file for handling form submissions and related functionality. 
 * Author: NicMac
 * Created On: October 16, 2024 
 */

$(document).ready(function () {

    $("#myForm").on("submit", function (event) {

        event.preventDefault();

        validateForm = validateForm();

        if (validateForm) {

            // Submit the form
            alert("the form is valid");            

            let myForm = document.getElementById("myForm");
            let data = new FormData(myForm);
            

            $.ajax({
                url: '/',
                method: 'POST',
                data: data,
                processData: false,
                contentType: false,
                success: function (response) {
                    console.log("form data has been sent successfully");
                    alert('Your form has been sent successfully.');
                },
                error: function (xhr, status, error) {
                    console.log("!!!!!form data failed to be sent!!!!!");
                    alert('Your form was not sent successfully.');
                    console.error(error);
                }
            });


        } else {

//         Prevent the default form action
            event.preventDefault();
            alert("the form is not valid");

        }
    });
});