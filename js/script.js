// Toggle icon navbar for mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Remove toggle and navbar when scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Scroll reveal animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content,.heading,.header-text', { origin: 'top' });
ScrollReveal().reveal('.home-img,.services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,', { origin: 'left' });
ScrollReveal().reveal('.home-content p,', { origin: 'right' });

// Typed.js for animated text
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'IT Teacher', 'Freelancer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// WhatsApp message sending
function sendMessage() {
    var fullName = encodeURIComponent(document.getElementById('fullName').value);
    var email = encodeURIComponent(document.getElementById('email').value);
    var mobileNumber = encodeURIComponent(document.getElementById('mobileNumber').value);
    var emailSubject = encodeURIComponent(document.getElementById('emailSubject').value);
    var message = encodeURIComponent(document.getElementById('message').value);

    var whatsappLink = 'https://wa.me/6282246431454/?text=' +
        'Full%20Name:%20' + fullName +
        '%0AEmail:%20' + email +
        '%0AMobile%20Number:%20' + mobileNumber +
        '%0AEmail%20Subject:%20' + emailSubject +
        '%0AMessage:%20' + message;

    window.open(whatsappLink);
}

// Change navbar background on scroll
window.addEventListener("scroll", function () {
    const navbar =  document.querySelector(".header");
    if (window.scrollY > 50) {
        navbar.classList.add("solid");
    } else {
        navbar.classList.remove("solid");
    }
});
