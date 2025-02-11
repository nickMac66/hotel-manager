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
            fname: "First name is required",
            lname: "Last name is required",
            phone: {
                required: "Phone number is required",
                phone: "Please enter  a valid phone number"
            },
            email: {
                required: "Email is required",
                email: "Your email address must be in the format of name@domain.com"
            },
            checkin: "Checkin date is required",
            checkout: "Checkout date is required"
        }
    });
}); 