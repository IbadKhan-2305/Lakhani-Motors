const cars = [
  {
    id: 1,
    name: "Toyota Landcruiser Prado TX",
    model: "2019",
    color: "White",
    transmission: "Automatic",
    images: [
      "assets/images/cars/TOYOTA LANDCRUISER PRADO/IMG_3983.JPG",
      "assets/images/cars/TOYOTA LANDCRUISER PRADO/IMG_3985.JPG",
      "assets/images/cars/TOYOTA LANDCRUISER PRADO/IMG_3986.JPG",
      "assets/images/cars/TOYOTA LANDCRUISER PRADO/IMG_3987.JPG"
    ]
  },
];

// Get car ID from URL (default to Prado if missing)
const urlParams = new URLSearchParams(window.location.search);
const carId = parseInt(urlParams.get('id'), 10) || 1;
const car = cars.find(c => c.id === carId);

// DOM elements
const nameEl = document.getElementById('car-name');
const colorEl = document.getElementById('car-color');
const transEl = document.getElementById('car-transmission');
const modelEl = document.getElementById('car-model');
const galleryEl = document.getElementById('car-gallery');

if (car) {
  nameEl.textContent = car.name;
  colorEl.textContent = `Color: ${car.color}`;
  transEl.textContent = `Transmission: ${car.transmission}`;
  modelEl.textContent = `Model: ${car.model}`;

  galleryEl.innerHTML = car.images.map(src => `<img src="${src}" alt="${car.name}">`).join('');
} else {
  nameEl.textContent = 'Car Not Found';
  galleryEl.innerHTML = '<p>No images available.</p>';
}

// Slider functionality
let currentIndex = 0;
const imagesList = galleryEl.querySelectorAll('img');

function showSlide(index) {
  if (imagesList.length === 0) return;
  if (index < 0) currentIndex = imagesList.length - 1;
  else if (index >= imagesList.length) currentIndex = 0;
  else currentIndex = index;

  const offset = -currentIndex * 100;
  galleryEl.style.transform = `translateX(${offset}%)`;
}

// Arrow buttons
document.querySelector('.arrow-left').addEventListener('click', () => showSlide(currentIndex - 1));
document.querySelector('.arrow-right').addEventListener('click', () => showSlide(currentIndex + 1));

// Swipe support for mobile
let startX = 0;
galleryEl.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
galleryEl.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) showSlide(currentIndex - 1); // swipe right
  else if (startX - endX > 50) showSlide(currentIndex + 1); // swipe left
});

// Initialize first slide
showSlide(0);
