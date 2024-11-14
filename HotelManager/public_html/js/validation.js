/**
 * Name: bookingForm.js
 * Description: JavaScript file to validate user input 
 * Author: NicMac
 * Created On: October 24, 2024
 */

function validateForm() {

    let isValid = true;

    let fname = $("#myForm #fname").val();
    let lname = $("#myForm #lname").val();
    let phone = $("#myForm #phone").val();
    let email = $("#myForm #email").val();
    let checkin = $("#myForm #checkin").val();
    let checkout = $("#myForm #checkout").val();
    let roomType = $('#myForm input[name="roomType"]:checked');

    const fieldsAreEmpty = (fname === "" || lname === "" || phone === "" || email === "" || checkin === "" || checkout === "");
    const radioNotChecked = $('#myForm input[name="roomType"]:checked').length === 0;

    if (radioNotChecked) {

        $('h5[name="radioNotCheckedMsg"]').html('**Required').css("color", "red");
        isValid = false;

    }

    $("#myForm").find("*").each(function () {

        let id = $(this).attr('id');
        let name = $(this).attr('name');

        if (fieldsAreEmpty) {

            $(`h5#${id}`).html('**Required').css("color", "red");
            isValid = false;

        }
    });

    return isValid;

}