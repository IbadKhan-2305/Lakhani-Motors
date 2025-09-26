/* ============================
   script.js — Full Version
   Inventory + Navbar + Hamburger
============================ */

/* ---------- NAVBAR STICKY + SMOOTH SCROLL ---------- */
(function() {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) navbar.classList.add('sticky');
      else navbar.classList.remove('sticky');
    });
  }

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
})();

/* ---------- HAMBURGER MENU TOGGLE WITH SLIDE ---------- */
(function() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      if (navLinks.classList.contains('show-menu')) {
        // Close menu
        navLinks.style.maxHeight = '0';
        navLinks.style.opacity = '0';
        setTimeout(() => navLinks.classList.remove('show-menu'), 500);
      } else {
        // Open menu
        navLinks.classList.add('show-menu');
        setTimeout(() => {
          navLinks.style.maxHeight = navLinks.scrollHeight + 'px';
          navLinks.style.opacity = '1';
        }, 10);
      }
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
