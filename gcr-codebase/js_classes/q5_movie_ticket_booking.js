/**
 * Q5: Movie Ticket Booking (Objects + RegExp)
 * Validates ticket booking inputs and stores details in booking object.
 */

function processMovieBooking(name, email, seats) {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const seatsNumber = Number(seats);

    const errors = [];

    if (!nameRegex.test(name.trim())) {
        errors.push("Name must contain only alphabets.");
    }

    if (!emailRegex.test(email.trim())) {
        errors.push("Invalid email format.");
    }

    if (isNaN(seatsNumber) || seatsNumber < 1 || seatsNumber > 10) {
        errors.push("Seats must be a number between 1 and 10.");
    }

    if (errors.length > 0) {
        console.log("[Booking Failed] Reasons:");
        errors.forEach(err => console.log(`- ${err}`));
        return null;
    }

    const bookingInfo = {
        bookingId: `TICKET-${Math.floor(1000 + Math.random() * 9000)}`,
        name: name.trim(),
        email: email.trim(),
        seats: seatsNumber,
        bookingTime: new Date().toLocaleString()
    };

    console.log("[Booking Successful] Ticket Details:");
    console.log(bookingInfo);
    return bookingInfo;
}

console.log("=== Q5: MOVIE TICKET BOOKING TEST ===");
console.log("--- Test Case 1: Valid Booking ---");
processMovieBooking("Ananya Verma", "ananya@example.com", 4);

console.log("\n--- Test Case 2: Invalid Booking (Seats = 12, Invalid Email) ---");
processMovieBooking("Ananya123", "ananyaexample.com", 12);
