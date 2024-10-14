/*
 * Name: utilities.js
 * Description: JavaScript file containing utility functions for various purposes
 * Author: NicMac
 * Created On: October 13, 2024
 * Last Modified: October 13, 2024
 */

function formGenerator(formData) {

    let tableHeader = " ";
    // Start building the form
    let form = "<form>";
    form += "<table>";
    form += "<tr>";

    for (let obj in formData) {
        let formField = obj;
        let nestedObject = formData[obj];
        for (let key in nestedObject) {
            let value = formData[formField][key];
            console.log(value);
        }



    }




//    for (let obj in formData) {
//        let nestedObject = formData[obj];
//        for (let key in nestedObject) {
//        }
//    }







    form += "</table>";
    form += "</form>";
    return form;
}








//        if (formData[key] == "nextRow") {
//            form += "</tr>";
//
//        } else if (formData[key] == "inputType") {
//            form += "<td>";
//            form += "<input type=" + formData[key] + "id=" + tableHeader + "name=" + tableHeader + ">";
//            form += "</td>";
//
//        } else {
//            tableHeader = formData[key];
//            form += "<th>";
//            form += tableHeader;
//            form += "</th>";
//        }
//    }


