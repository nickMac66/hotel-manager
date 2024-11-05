/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input 
 * Author: NicMac
 * Created On: October 24, 2024
 */

function validateForm() {

    const noRadioSelected = $(`input[name='${name}']:checked`).length === 0;

    let isValid = true;
    let inputLabel = "";
//    let radioSelection = $(`input[type='radio'][name='roomType']:checked`).val();   


    // Get user input & associated labels from the form
    $("#myForm th, #myForm input").each(function () {

        // Constants to check various conditions        
        const emptyFields = ""; // Check for empty input fields
        const isLabel = ($(this).is("th")); // Check if input label

        // Variables to hold input field attributes and values        
        let type = $(this).attr('type');
        let id = $(this).attr('id');
        let name = $(this).attr('name');
        let group = $(this).attr('group');
        let userResponse = $(this).val();

        // Label the input fields
        if (isLabel) {

            inputLabel = $(this).text();

        } else {

            // Handle the different input element errors
            switch (userResponse) {

                case emptyFields:

                    $(`h5#${id}`).html(`**${inputLabel} is required`).css("color", "red");
                    isValid = false;
                    break;

            }
        }
    });

    // Handle no radio selection error
    if (noRadioSelected) {

        $(`h5#${id}`).html(`**${group} is required`).css("color", "red");
        isValid = false;

    }

    return isValid;

}