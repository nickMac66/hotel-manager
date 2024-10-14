/*
 * Name: bookingForm.js
 * Description: JavaScript file to generate a dynamic booking form
 * Author: NicMac
 * Created On: October 12, 2024
 * Last Modified: October 12, 2024
 */

const form = {
    cell1: {fname: "First name ===>", inputType: "text"},
    cell2: {lname: "Last name ===>", inputType: "text"},
    cell3: {phone: "Phone ===>", inputType: "text"},
    cell4: {email: "Email ===>", inputType: "text"},
    cell5: {checkin: "Check in", inputType: "date"},
    cell6: {checkout: "Check out", inputType: "date"},
    cell7: {roomType: "Room type", inputType: "text"}
};

document.addEventListener("DOMContentLoaded", function () {
    let bookingFormHtml = document.querySelector(".container");
    if (bookingFormHtml) {
        bookingFormHtml.innerHTML = formGenerator(form);
    } else {
        console.error("No container found.");
    }
});