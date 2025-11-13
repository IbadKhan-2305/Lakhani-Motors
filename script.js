/* ============================
   script.js — Full Final Version
   ============================ */

/* ---------- NAVBAR STICKY + GLOW + SMOOTH SCROLL + HAMBURGER ---------- */
(function() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('sticky', 'glow'); // add glow
      } else {
        navbar.classList.remove('sticky', 'glow');
      }
    });
  }

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });

      // Close mobile menu on click
      if (navLinks.classList.contains('mobile-active')) {
        navLinks.classList.remove('mobile-active');
      }
    });
  });

  // Hamburger toggle
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-active');
    });
  }
})();

/* ---------- HERO / SHOWCASE STAGGERED ON LOAD ---------- */
window.addEventListener('load', () => {
  try {
    const staggerEls = document.querySelectorAll('.hero-content, .showcase-car, .about, .contact');
    staggerEls.forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(12px)';
      setTimeout(() => {
        el.style.transition = 'opacity 600ms ease, transform 600ms ease';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 150 * i);
    });
  } catch (e) { /* ignore if elements absent */ }
});

/* ---------- INVENTORY: CARS DATA ---------- */
const cars = [
  {
    id: 1,
    name: "Toyota Landcruiser Prado TX",
    transmission: "Automatic",
    color: "White",
    model: "2019",
    mileage: "15,000 km",
    price: "$60,000",
    folder: "assets/images/cars/TOYOTA LANDCRUISER PRADO",
    images: [
      "IMG_3984.JPG",
      "IMG_3983.JPG",
      "IMG_3985.JPG",
      "IMG_3986.JPG",
      "IMG_3987.JPG"
    ]
  },
  {
    id: 2,
    name: "Mercedes-Benz GLE 350d",
    transmission: "Automatic",
    color: "Black",
    model: "2020",
    mileage: "12,500 km",
    price: "$75,000",
    folder: "assets/images/cars/MERCEDES GLE 350D",
    images: [
      "IMG_4001.JPG",
      "IMG_4002.JPG"
    ]
  },
  // Add more cars here...
];

/* ---------- INVENTORY: RENDER + PAGINATION ---------- */
(function() {
  const inventoryGrid = document.getElementById('inventory-grid');
  if (!inventoryGrid) return; // only run on inventory page

  let currentPage = 1;
  const carsPerPage = 10;
  const pageInfoEl = document.getElementById('page-info');
  const prevPageBtn = document.getElementById('prev-page');
  const nextPageBtn = document.getElementById('next-page');

  function renderInventory() {
    inventoryGrid.innerHTML = '';

    const start = (currentPage - 1) * carsPerPage;
    const end = start + carsPerPage;
    const pageCars = cars.slice(start, end);

    pageCars.forEach((car) => {
      const card = document.createElement('div');
      card.className = 'inventory-car';

      const mainImage = car.images.length ? `${car.folder}/${car.images[0]}` : "";
      card.innerHTML = `
        <div class="car-top">
          <img class="main-img" src="${mainImage}" alt="${car.name}">
        </div>

        <div class="car-actions" style="display:flex;justify-content:flex-end;margin-top:12px;">
          <a href="car-details.html?id=${car.id}" class="details-btn">Details</a>
        </div>

        <div class="car-specs-glow" style="margin-top:12px;">
          <p>${car.name} • ${car.mileage} • ${car.transmission} • ${car.price}</p>
        </div>
      `;

      inventoryGrid.appendChild(card);

      // Style main image
      const mainImg = card.querySelector('.main-img');
      mainImg.style.width = '720px';
      mainImg.style.maxWidth = '100%';
      mainImg.style.height = '240px';
      mainImg.style.objectFit = 'contain';
      mainImg.style.borderRadius = '10px';
      mainImg.style.display = 'block';
      mainImg.style.margin = '0 auto';
    });

    if (pageInfoEl) pageInfoEl.innerText = `Page ${currentPage}`;
  }

  if (prevPageBtn) prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderInventory();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  if (nextPageBtn) nextPageBtn.addEventListener('click', () => {
    const maxPage = Math.ceil(cars.length / carsPerPage);
    if (currentPage < maxPage) {
      currentPage++;
      renderInventory();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  renderInventory();
})();
