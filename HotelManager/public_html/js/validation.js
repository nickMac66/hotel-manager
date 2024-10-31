/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input 
 * Author: NicMac
 * Created On: October 24, 2024
 */

function validateForm() {

    let isValid = true;
    let inputLabel = "";
    let userInput = "";
    let isEmpty = "";

    const formEntries = [];

    $("#myForm th, #myForm input").each(function (index) {

        if ($(this).is("th")) {

            inputLabel = $(this).text();

        }

        if ($(this).is("input")) {

            userInput = $(this).val();
            inputId = $(this).attr('id');

            if (userInput === isEmpty) {

                $(`h5#${inputId}`).html(`${inputLabel} is required`).css("color", "red");
                isValid = false;

            }
        }
    });

    return isValid;

}