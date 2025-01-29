class Booking {                
    constructor (fname, lname, phone, email, checkin, checkout, roomType) {
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.email = email;
        this.checkin = checkin;
        this.checkout = checkout;
        this.roomType = roomType;
    }
}

module.exports = Booking;