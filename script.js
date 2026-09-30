```javascript
// ==============================
// MOBILE MENU
// ==============================

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });

});


// ==============================
// BOOKING FORM
// ==============================

const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const checkin = document.getElementById("checkin").value;
    const checkout = document.getElementById("checkout").value;
    const guests = document.getElementById("guests").value;


    if (!name || !phone || !checkin || !checkout || !guests) {

        formMessage.textContent =
            "Please fill in all the details.";

        formMessage.style.color = "red";

        return;
    }


    // Check dates

    const checkInDate = new Date(checkin);
    const checkOutDate = new Date(checkout);

    if (checkOutDate <= checkInDate) {

        formMessage.textContent =
            "Check-out date must be after check-in date.";

        formMessage.style.color = "red";

        return;
    }


    // Successful submission

    formMessage.textContent =
        `Thank you ${name}! Your booking request has been received.`;

    formMessage.style.color = "#285536";


    // Clear form

    bookingForm.reset();

});


// ==============================
// GALLERY IMAGE MODAL
// ==============================

const galleryImages =
    document.querySelectorAll(".gallery-item img");

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const modalClose =
    document.getElementById("modalClose");


galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        modalImage.src = image.src;

        modalImage.alt = image.alt;

        imageModal.classList.add("active");

    });

});


// Close modal

modalClose.addEventListener("click", () => {

    imageModal.classList.remove("active");

});


// Close modal when clicking outside image

imageModal.addEventListener("click", (event) => {

    if (event.target === imageModal) {

        imageModal.classList.remove("active");

    }

});


// Close modal with Escape key

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        imageModal.classList.remove("active");

    }

});


// ==============================
// SET MINIMUM DATE
// ==============================

const checkinInput =
    document.getElementById("checkin");

const checkoutInput =
    document.getElementById("checkout");


const today = new Date();

const year = today.getFullYear();

const month =
    String(today.getMonth() + 1).padStart(2, "0");

const day =
    String(today.getDate()).padStart(2, "0");

const todayString =
    `${year}-${month}-${day}`;


checkinInput.min = todayString;

checkoutInput.min = todayString;


// Update checkout minimum date

checkinInput.addEventListener("change", () => {

    checkoutInput.min = checkinInput.value;

});
```
