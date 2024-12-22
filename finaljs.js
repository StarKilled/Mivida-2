// script.js
const sky = document.getElementById('sky');

// Número de estrellas
const starCount = 200;

// Generar estrellas aleatoriamente
for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // Posiciones aleatorias
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    const delay = Math.random() * 2; // Retardo aleatorio
    const duration = Math.random() * 2 + 1; // Duración aleatoria

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    star.style.animationDelay = `${delay}s`;
    star.style.animationDuration = `${duration}s`;

    sky.appendChild(star);
}
