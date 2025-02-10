$(document).ready(function () {
    console.log("validate.js")

    $("#bookingForm").validate({
        rules: {
            fname: "required",
            lname: "required",
            phone: "required",
            email: "required",
            checkin: "required",
            checkout: "required"
        },
        messages: {
            fname: "first name is required",
            lname: "last name is required",
            phone: "email is required",
            email: "email is required",
            checkin: "checkin date is required",
            checkout: "checkout date is required"
        }    
    });
}); 