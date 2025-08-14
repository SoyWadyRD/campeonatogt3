// Contador
const countdownDate = new Date("August 16, 2025 20:00:00 GMT-0400").getTime();

const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000*60*60*24));
  const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((distance % (1000*60)) / 1000);

  document.getElementById("dias").innerText = days;
  document.getElementById("horas").innerText = hours;
  document.getElementById("minutos").innerText = minutes;
  document.getElementById("segundos").innerText = seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("contador").innerText = "¡La carrera ha comenzado!";
  }
}, 1000);

// Lightbox autos
const zoomImgs = document.querySelectorAll(".zoom");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const cerrar = document.querySelector(".cerrar");

zoomImgs.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

cerrar.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if(e.target !== lightboxImg) lightbox.style.display = "none";
});



















const menu = document.getElementById('menu');
const toggle = document.querySelector('.menu-toggle');
const overlay = document.querySelector('.overlay');
const links = document.querySelectorAll('#menu .menu-container a');

// Abrir/cerrar menú
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Cerrar al tocar overlay
overlay.addEventListener('click', () => {
  menu.classList.remove('active');
});

// Cerrar al tocar un link
links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});
