// Full car array (same as script.js)
const cars = [];
for (let i = 1; i <= 30; i++) {
  cars.push({
    id: i,
    name: `Luxury Model ${i}`,
    price: `$${(150 + i) * 1000}`,
    mileage: `${8 + i}000 km`,
    transmission: (i % 2 === 0) ? 'Automatic' : 'Manual',
    images: [
      `https://picsum.photos/800/500?random=${i}`,
      `https://picsum.photos/800/500?random=${i+30}`,
      `https://picsum.photos/800/500?random=${i+60}`,
      `https://picsum.photos/800/500?random=${i+90}`,
      `https://picsum.photos/800/500?random=${i+120}`
    ]
  });
}

// Get car ID from URL
const urlParams = new URLSearchParams(window.location.search);
const carId = parseInt(urlParams.get('id'), 10);
const car = cars.find(c => c.id === carId);

// DOM elements
const nameEl = document.getElementById('car-name');
const priceEl = document.getElementById('car-price');
const mileageEl = document.getElementById('car-mileage');
const transEl = document.getElementById('car-transmission');
const galleryEl = document.getElementById('car-gallery');

if (car) {
  nameEl.textContent = car.name;
  priceEl.textContent = `Price: ${car.price}`;
  mileageEl.textContent = `Mileage: ${car.mileage}`;
  transEl.textContent = `Transmission: ${car.transmission}`;

  // populate images
  galleryEl.innerHTML = car.images.map(src => `<img src="${src}" alt="${car.name}">`).join('');
} else {
  nameEl.textContent = 'Car Not Found';
  galleryEl.innerHTML = '<p>No images available.</p>';
}

// Slider functionality
let currentIndex = 0;
const images = galleryEl.querySelectorAll('img');

function showSlide(index) {
  if (index < 0) currentIndex = images.length - 1;
  else if (index >= images.length) currentIndex = 0;
  else currentIndex = index;

  const offset = -currentIndex * 100;
  galleryEl.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.arrow-left').addEventListener('click', () => showSlide(currentIndex - 1));
document.querySelector('.arrow-right').addEventListener('click', () => showSlide(currentIndex + 1));

// swipe for mobile
let startX = 0;
galleryEl.addEventListener('touchstart', e => { startX = e.touches[0].clientX; });
galleryEl.addEventListener('touchend', e => {
  const endX = e.changedTouches[0].clientX;
  if (endX - startX > 50) showSlide(currentIndex - 1); // swipe right
  else if (startX - endX > 50) showSlide(currentIndex + 1); // swipe left
});

// Initialize first slide
showSlide(0);
