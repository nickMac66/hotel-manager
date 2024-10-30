/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input 
 * Author: NicMac
 * Created On: October 24, 2024
 */

function validateForm() {

//    console.log("validating...");

    let isValid = true;

    const formEntries = [];

    $("#myForm th, #myForm input").each(function (index) {

        let label = "";
        let userInput = "";
        let isEmpty = "";

        if ($(this).is("th")) {

            label = $(this).text();
            console.log("input label: " + label);

        } else if ($(this).is("input")) {

            userInput = $(this).val();
            console.log("user input: " + userInput);

            if (userInput == isEmpty) {

//                console.log("!!!empty fields!!!");

                console.log(label);
                $("h5#fname").html("**Required").css("color", "red");
                isValid = false;

            } else {

                formEntries[index] = {label: label, value: userInput};

            }
        }
    });

    return isValid;

}