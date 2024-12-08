
const btnBars = document.getElementById("btn-bars");
const navMobile = document.getElementById("navMobile");
const btnEquiz = document.getElementById("btn-equiz");

const toggleNav = (action) => {
  if (action === "toggle") {
   navMobile.classList.toggle("nav-mobile");
  } else if (action === "remove") {
    navMobile.classList.remove("nav-mobile");
  }
};
btnBars.addEventListener("click", () => toggleNav("toggle"));
btnEquiz.addEventListener("click", () => toggleNav("remove"));

const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const nextButton = document.querySelector('.carousel-btn.next');
const prevButton = document.querySelector('.carousel-btn.prev');

const visibleItems = 3; // Número de elementos visibles
const totalItems = items.length;
let currentIndex = 0;

function updateCarousel() {
  const translateX = -currentIndex * (100 / visibleItems); // Moverse en proporción al ancho visible
  track.style.transform = `translateX(${translateX}%)`;

  // Deshabilitar botones en los extremos
  prevButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex >= totalItems - visibleItems;
}

// Botones de navegación
nextButton.addEventListener('click', () => {
  if (currentIndex < totalItems - visibleItems) currentIndex++;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) currentIndex--;
  updateCarousel();
});

// Inicialización
updateCarousel();
