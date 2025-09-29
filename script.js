/* ============================
   script.js — full replacement
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

/* ---------- INVENTORY: RENDER + PAGINATION ---------- */
(function() {
  const inventoryGrid = document.getElementById('inventory-grid');
  if (!inventoryGrid) return; // only run on inventory page

  // Sample data (30 cars)
  const cars = [];
  for (let i = 1; i <= 30; i++) {
    cars.push({
      id: i,
      name: `Luxury Model ${i}`,
      price: `$${(150 + i) * 1000}`,
      mileage: `${8 + i}000 km`,
      transmission: (i % 2 === 0) ? 'Automatic' : 'Manual',
      images: [
        `https://picsum.photos/800/500?random=${i}`,       // main
        `https://picsum.photos/300/200?random=${i+30}`,
        `https://picsum.photos/300/200?random=${i+60}`,
        `https://picsum.photos/300/200?random=${i+90}`,
        `https://picsum.photos/300/200?random=${i+120}`,
        `https://picsum.photos/300/200?random=${i+150}`,
      ]
    });
  }

  let currentPage = 1;
  const carsPerPage = 10;
  const pageInfoEl = document.getElementById('page-info');
  const prevPageBtn = document.getElementById('prev-page');
  const nextPageBtn = document.getElementById('next-page');

  // Render current page
  function renderInventory() {
    inventoryGrid.innerHTML = '';

    const start = (currentPage - 1) * carsPerPage;
    const end = start + carsPerPage;
    const pageCars = cars.slice(start, end);

    pageCars.forEach((car) => {
      const card = document.createElement('div');
      card.className = 'inventory-car';

      card.innerHTML = `
        <div class="car-top">
          <img class="main-img" src="${car.images[0]}" alt="${car.name}">
        </div>

        <div class="car-actions" style="display:flex;justify-content:flex-end;margin-top:12px;">
          <a href="car-details.html?id=${car.id}" class="details-btn">Details</a>
        </div>

        <div class="car-specs-glow" style="margin-top:12px;">
          <p>${car.name} • ${car.mileage} • ${car.transmission} • ${car.price}</p>
        </div>
      `;

      inventoryGrid.appendChild(card);

      // style main image
      const mainImg = card.querySelector('.main-img');
      mainImg.style.width = '720px';
      mainImg.style.maxWidth = '100%';
      mainImg.style.height = '360px';
      mainImg.style.objectFit = 'cover';
      mainImg.style.borderRadius = '10px';
      mainImg.style.display = 'block';
      mainImg.style.margin = '0 auto';
    });

    if (pageInfoEl) pageInfoEl.innerText = `Page ${currentPage}`;
  }

  // Pagination handlers
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

  // Always start on page 1
  renderInventory();
})();

/* ---------- GLOBAL CARS ARRAY INCLUDING FEATURED AND INVENTORY ---------- */
const cars = [
  // Featured Cars on Home Page
  { id: 101, name: 'Mercedes S-Class', price: 120000 },
  { id: 102, name: 'Rolls Royce Phantom', price: 450000 },
  { id: 103, name: 'BMW 7 Series', price: 110000 },
  // Inventory Cars
  ...Array.from({length:30}, (_, i) => ({
    id: i+1,
    name: `Luxury Model ${i+1}`,
    price: (150 + i) * 1000,
    mileage: `${8 + i}000 km`,
    transmission: (i % 2 === 0) ? 'Automatic' : 'Manual',
    images: [
      `https://picsum.photos/800/500?random=${i+1}`,
      `https://picsum.photos/300/200?random=${i+31}`,
      `https://picsum.photos/300/200?random=${i+61}`,
      `https://picsum.photos/300/200?random=${i+91}`,
      `https://picsum.photos/300/200?random=${i+121}`,
      `https://picsum.photos/300/200?random=${i+151}`,
    ]
  }))
];

/* ---------- FINANCING CALCULATOR WITH AUTOCOMPLETE + ENTER KEY ---------- */
(function() {
  const searchInput = document.getElementById('car-search');
  const calculateBtn = document.getElementById('calculate-btn');
  const downPaymentEl = document.getElementById('down-payment');
  const monthlyBalanceEl = document.getElementById('monthly-balance');
  const autocompleteList = document.getElementById('autocomplete-list');

  function showAutocomplete(val) {
    autocompleteList.innerHTML = '';
    if (!val) return;

    const matches = cars.filter(c => c.name.toLowerCase().includes(val.toLowerCase()));
    matches.forEach(c => {
      const li = document.createElement('li');
      li.innerText = c.name;
      li.addEventListener('click', () => {
        searchInput.value = c.name;
        autocompleteList.innerHTML = '';
        calculateLoan();
      });
      autocompleteList.appendChild(li);
    });
  }

  function calculateLoan() {
    const query = searchInput.value.trim().toLowerCase();
    const car = cars.find(c => c.name.toLowerCase() === query);

    if (!car) {
      downPaymentEl.innerText = "$0";
      monthlyBalanceEl.innerText = "$0";
      alert('Car not found! Please select from the list.');
      return;
    }

    const downPayment = car.price * 0.7;
    const balance = (car.price - downPayment) / 6;

    downPaymentEl.innerText = `$${downPayment.toLocaleString()}`;
    monthlyBalanceEl.innerText = `$${balance.toLocaleString()}`;
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      showAutocomplete(e.target.value);
    });

    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        autocompleteList.innerHTML = '';
        calculateLoan();
      }
    });

    document.addEventListener('click', (e) => {
      if (e.target !== searchInput) autocompleteList.innerHTML = '';
    });
  }

  if (calculateBtn) {
    calculateBtn.addEventListener('click', calculateLoan);
  }
})();
