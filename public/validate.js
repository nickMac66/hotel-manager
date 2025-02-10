$(document).ready(function () {
    console.log("validate.js")

    // Add custom phone validator
    $.validator.addMethod("phone", function (value, element) {
        return this.optional(element) || /^(\+1)?\d{3}\d{3}\d{4}$/.test(value);
    }, "Please enter a valid phone number");

    $("#bookingForm").validate({
        errorClass: "error-message",
        rules: {
            fname: "required",
            lname: "required",
            phone: {
                required: true,
                phone: true
            },
            email: {
                required: true,
                email: true
            },
            checkin: "required",
            checkout: "required"
        },
        messages: {
            fname: "first name is required",
            lname: "last name is required",
            phone: {
                required: "phone number is required",
                phone: "please enter  a valid phone number"
            },
            email: {
                required: "email is required",
                email: "Your email address must be in the format of name@domain.com"
            },
            checkin: "checkin date is required",
            checkout: "checkout date is required"
        }
    });
}); 