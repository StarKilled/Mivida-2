// script.js
const sky = document.getElementById('sky');

// Generar estrellas fijas
const starCount = 200;
for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    sky.appendChild(star);
}

// Función para generar cometas
function createComet() {
    const comet = document.createElement('div');
    comet.classList.add('comet');

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight / 2; // Comienzan desde la parte superior
    
    comet.style.left = `${startX}px`;
    comet.style.top = `${startY}px`;
    comet.style.animationDuration = `${Math.random() * 2 + 3}s`;
    comet.style.animationDelay = `${Math.random() * 5}s`;

    sky.appendChild(comet);

    // Eliminar cometa después de su animación
    setTimeout(() => {
        comet.remove();
    }, 5000);
}

// Generar cometas cada 2 segundos
setInterval(createComet, 2000);
