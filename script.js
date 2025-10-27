// Configuración de la fecha objetivo: 28 de diciembre de 2026
const targetDate = new Date('2026-12-28T00:00:00').getTime();

// Elementos del DOM
const monthsElement = document.getElementById('months');
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');

// Función para actualizar el contador
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        // Calcular las unidades de tiempo
        const months = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 30.44)); // Promedio de días por mes
        const days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        const milliseconds = Math.floor((timeLeft % 1000));

        // Actualizar los elementos del DOM con padding
        monthsElement.textContent = months.toString().padStart(2, '0');
        daysElement.textContent = days.toString().padStart(3, '0');
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
        millisecondsElement.textContent = milliseconds.toString().padStart(3, '0');

        // Sin efectos de parpadeo para un look minimalista
    } else {
        // Si la fecha ha pasado, mostrar ceros
        monthsElement.textContent = '00';
        daysElement.textContent = '000';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        millisecondsElement.textContent = '000';
        
        // Cambiar el título para indicar que el destino ha llegado
        const countdownTitle = document.querySelector('.countdown-title');
        countdownTitle.textContent = 'EL DESTINO FINAL HA LLEGADO';
        countdownTitle.style.color = '#ff0000';
        countdownTitle.style.animation = 'pulse 1s infinite';
    }
}

// Efectos visuales adicionales
function addVisualEffects() {
    // Efecto de partículas flotantes
    createFloatingParticles();
    
    // Efecto de brillo en los números
    addGlowEffect();
}

function createFloatingParticles() {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        container.appendChild(particle);
    }
}

function addGlowEffect() {
    const numbers = document.querySelectorAll('.number');
    numbers.forEach(number => {
        number.addEventListener('mouseenter', () => {
            number.style.color = '#f0f0f0';
            number.style.fontWeight = '400';
        });
        number.addEventListener('mouseleave', () => {
            number.style.color = '#ffffff';
            number.style.fontWeight = '300';
        });
    });
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Actualizar el contador inmediatamente
    updateCountdown();
    
    // Actualizar cada 10 milisegundos para milisegundos suaves
    setInterval(updateCountdown, 10);
    
    // Añadir efectos visuales
    addVisualEffects();
    
    // Efecto de sonido de fondo (opcional)
    addBackgroundAmbience();
});

function addBackgroundAmbience() {
    // Crear un elemento de audio para ambiente
    const audio = document.createElement('audio');
    audio.loop = true;
    audio.volume = 0.1;
    
    // Nota: En un proyecto real, necesitarías un archivo de audio
    // audio.src = 'doom-ambience.mp3';
    // audio.play();
}

// Efecto de teclado para activar modo "Doom"
document.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'D') {
        document.body.classList.toggle('doom-mode');
    }
});
