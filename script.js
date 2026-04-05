const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 100;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// Active navbar link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active-link");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active-link");
        }
    });
});

const sliders = document.querySelectorAll(".slider-container");

sliders.forEach((slider) => {
    let index = 0;
    const slides = slider.querySelectorAll(".slide");
    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");

    function showSlide(i) {
        slides.forEach((slide) => slide.classList.remove("active"));
        slides[i].classList.add("active");
    }

    nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });
});

// Image popup
const popupImages = document.querySelectorAll(".popup-image");
const imagePopup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImg");
const closePopup = document.getElementById("closePopup");

popupImages.forEach((img) => {
    img.addEventListener("click", () => {
        imagePopup.classList.add("show");
        popupImg.src = img.src;
        popupImg.alt = img.alt;
    });
});

closePopup.addEventListener("click", () => {
    imagePopup.classList.remove("show");
});

imagePopup.addEventListener("click", (e) => {
    if (e.target === imagePopup) {
        imagePopup.classList.remove("show");
    }
});