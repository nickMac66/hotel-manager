$(document).ready(function () {

    /**
    *  Dropdown menu functionality
    *  This script manages the behavior of the dropdown menu in the header.
    *  It toggles the visibility of the menu when the button is clicked,
    *  and closes the menu if the user clicks outside of it.
    */
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

    /**
    * Sends a DELETE request to remove a booking from the booking list.
    *
    * @param {string} id - The ID of the booking to be deleted.
    * @returns {Promise<Response>} The response from the server.
    */
    $(".deleteButton").click(async function () {
        const id = $(this).data('id');
        try {
            const response = await fetch(`/bookingList?id=${id}`, {
                method: 'DELETE',
            });
            const result = await response.json();
            if (response.ok) {
                alert(result.message);
                location.reload(); // Reload the page to reflect the changes
            } else {
                alert(result.message);
            }
        } catch (error) {
            console.error('Error deleting booking:', error);
            alert('util - Error deleting booking');
        }
    });
});