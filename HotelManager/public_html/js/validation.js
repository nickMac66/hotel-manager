/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input 
 * Author: NicMac
 * Created On: October 24, 2024
 */

function formIsValid() {

    let isValid = false;

    let fname = $("#fname").val();
    let lname = $("#lname").val();

    if (fname == "") {

        $("h5#fname").html("**First name is required").css("color", "red");
        isValid = false;

    }
    else if (lname == "") {


        $("h5#lname").html("**Last name is required").css("color", "red");
    
    } else {

        isValid = true;
    }



    return isValid;

}