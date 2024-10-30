/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input 
 * Author: NicMac
 * Created On: October 24, 2024
 */

function formIsValid() {

    let isValid = true;

    const formEntries = [];

    $("#myForm th, #myForm input").each(function (index) {

        if ($(this).is("th")) {
           
            formEntries[index] = {label: $(this).text(), value: null};            
        
        } else if ($(this).is("input")) {
        
            formEntries[index][index] = {label: null, value: $(this).val()};            
        
        }
    });

    return isValid;
    
}