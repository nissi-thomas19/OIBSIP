const elements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

elements.forEach((el) => observer.observe(el));
const text = ["Web Developer", "Designer", "ML Enthusiast"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = text[i];

    if (!isDeleting) {
        document.getElementById("typing").innerHTML =
            currentText.substring(0, j++);
    } else {
        document.getElementById("typing").innerHTML =
            currentText.substring(0, j--);
    }

    if (j == currentText.length) isDeleting = true;
    if (j == 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();