// =========================
// Typing Animation
// =========================

const words = [
    "DevOps Engineer",
    "Java Full Stack Developer",
    "AWS Cloud Enthusiast",
    "CI/CD Learner"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const heading = document.querySelector(".right h2");

function typeEffect() {

    currentWord = words[wordIndex];

    if (!isDeleting) {

        heading.innerHTML = currentWord.substring(0, letterIndex++);

        if (letterIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        heading.innerHTML = currentWord.substring(0, letterIndex--);

        if (letterIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex === words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);

}

typeEffect();


// =========================
// Scroll Animation
// =========================

const sections = document.querySelectorAll("section");

function revealSections() {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

}

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(80px)";
    section.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealSections);

revealSections();


// =========================
// Button Hover Effect
// =========================

const buttons = document.querySelectorAll(".buttons a");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px) scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px) scale(1)";

    });

});


// =========================
// Card Hover Effect
// =========================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});


// =========================
// Smooth Page Load
// =========================

window.onload = function () {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 1.2s";
        document.body.style.opacity = "1";

    }, 100);

};