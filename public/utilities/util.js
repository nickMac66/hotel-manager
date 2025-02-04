/**
 *  Dropdown menu functionality
 *  This script manages the behavior of the dropdown menu in the header.
 *  It toggles the visibility of the menu when the button is clicked,
 *  and closes the menu if the user clicks outside of it.
 */
$(document).ready(function () {
    $("#menuButton").click(function () {
        document.getElementById("myDropdown").classList.toggle("show");
    });
    
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };
});