// Lógica de Escrita Automática (Typing Effect)
const phrases = [
    "Estudante apaixonada por conhecimento.",
    "Determinada a aprender novos desafios.",
    "Futura Engenheira Elétrica e da Computação.",
    "Entusiasta de Robótica Autónoma."
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 60;
const targetElement = document.getElementById('typing-text');

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        targetElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        targetElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const delay = isDeleting ? 30 : typingSpeed;
    setTimeout(type, delay);
}

// Lógica de Revelação ao Rolar (Scroll Reveal)
function reveal() {
    const reveals = document.querySelectorAll(".reveal-on-scroll");
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
window.onload = () => {
    type();
    reveal();
}