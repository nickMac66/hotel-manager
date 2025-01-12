/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input
 * Author: NicMac
 * Created On: October 24, 2024
 */

function validateForm(userInput) {

    let isValid = true;
    console.log("hello from validation");

    for (let key in userInput) {
        switch (key) {
            case "fname":
                console.log("current field: " + key);
                break;
            case "lname":
                console.log("current field: " + key);
                break;
            case "phone":
                console.log("current field: " + key);
                break;
            case "email":
                console.log("current field: " + key);
                break;
            case "checkin":
                console.log("current field: " + key);
                break;
            case "checkout":
                console.log("current field: " + key);
                break;
            case "roomType":
                console.log("current field: " + key);
                break;
            default :
                console.log("default");
                break;
        }
    }    
    return isValid;
}
module.exports = {
    validateForm
};