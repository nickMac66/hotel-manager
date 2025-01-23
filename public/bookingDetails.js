displayBooking = (formData) => {
    
    console.log("displaying the booking details");
    let bookingDetails = "";
    
    for(let data in formData) {
        bookingDetails += formData[data];
    }
    return bookingDetails;
};
module.exports = {
    displayBooking
};






