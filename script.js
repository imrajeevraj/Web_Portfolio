// script.js

// 1. Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// 2. Typing Effect (Optimized)
const textElement = document.getElementById('typewriter');
if (textElement) {
    const texts = ["AI & ML Student", "Data Scientist", "C Programmer", "Web Developer"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let isDeleting = false;

    (function type() {
        if (count === texts.length) { count = 0; }
        currentText = texts[count];
        letter = isDeleting ? currentText.slice(0, --index) : currentText.slice(0, ++index);
        textElement.textContent = letter;
        let typeSpeed = isDeleting ? 50 : 100;
        if (!isDeleting && letter.length === currentText.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && letter.length === 0) {
            isDeleting = false;
            count++;
            typeSpeed = 500;
        }
        setTimeout(type, typeSpeed);
    }());
}

// 3. Contact Form Handling (Popup Logic)
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const modal = document.getElementById('success-modal');
const closeModalBtn = document.getElementById('close-modal-btn');

if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
        modal.classList.remove('opacity-100');
        modal.querySelector('div').classList.remove('scale-100');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300);
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin ml-2"></i>';
        submitBtn.disabled = true;

        const formData = new FormData(contactForm);

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        })
        .then(async (response) => {
            if (response.status === 200) {
                contactForm.reset();
                modal.classList.remove('hidden');
                setTimeout(() => {
                    modal.classList.add('opacity-100');
                    modal.querySelector('div').classList.add('scale-100');
                }, 10);
            } else {
                alert("Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            console.log(error);
            alert("Error sending message.");
        })
        .finally(() => {
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        });
    });
}

// 4. Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
};

const revealOptions = {
    threshold: 0.15, // Trigger when 15% visible
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
revealElements.forEach(el => revealObserver.observe(el));


// 5. Navbar Active State & Glass Effect
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    // Glass Effect Intensify on Scroll
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.classList.replace('bg-primary/80', 'bg-primary/95');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.replace('bg-primary/95', 'bg-primary/80');
    }

    // Active Link Highlight
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-accent');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('text-accent');
        }
    });
});