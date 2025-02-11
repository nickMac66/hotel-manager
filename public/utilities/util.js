$(document).ready(function () {

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