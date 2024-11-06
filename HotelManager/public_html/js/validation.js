/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input 
 * Author: NicMac
 * Created On: October 24, 2024
 */

let isValid = true;

function validateForm() {

    // Constants to validate empty fields
    const noRadioSelected = $(`input[name='${name}']:checked`).length === 0; // Check for no radio selection     

    // Field label
    let label = "";

    // Get user input & associated labels from the form
    $("#myForm th, #myForm input").each(function () {

        // Checks if the current attribute is 'label'
        const isLabel = ($(this).is("th")); // Check if input labe

        // Variables to hold input field attributes and values        
        let id = $(this).attr('id');
        let name = $(this).attr('name');
        let group = $(this).attr('group');
        let userInput = $(this).val();

        // Checks if the current input field is for a phone number
        let isPhone = ((id) === "phone");
        let isEmail = ((id) === "email");

        // Checks for empty fields
        let emptyFields = (userInput === "");

        // Label the input fields
        if (isLabel) {

            label = $(this).text();

        }

        if (emptyFields) {

            $(`h5#${id}`).html(`**${label} is required`).css("color", "red");
            isValid = false;

        }

        if (isPhone) {

            // Remove whitespace from user input
            userInput.trim();

            // Checks the length
            const phoneLength = /^\d{10}$/;
            // Checks for valid characters
            const validCharacters = /^[0-9-+]+$/;

            let validPhone = (phoneLength.test(userInput) && validCharacters.test(userInput));

            if (!validPhone) {

                $(`h5#${id}`).html(`**Invalid phone number`).css("color", "red");
                isValid = false;

            }
        }

        if (isEmail) {



        }
    });

    // Handle no radio selection 
    if (noRadioSelected) {

        $(`h5#${id}`).html(`**${group} is required`).css("color", "red");
        isValid = false;

    }

    return isValid;

}