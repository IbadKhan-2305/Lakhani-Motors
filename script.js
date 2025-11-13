/* ============================
<<<<<<< HEAD
   script.js — full replacement
=======
   script.js — Full Final Version
>>>>>>> 0cba6d2 (Update website files)
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

<<<<<<< HEAD
=======
/* ---------- INVENTORY: CARS DATA ---------- */
const cars = [
  {
   id: 1,
    name: "Toyota Landcruiser Prado TX",
    transmission: "Automatic",
    color: "White",
    model: "2019",
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
  name: "Toyota Harrier",
  transmission: "Automatic",
  color: "Black",
  model: "2012",
  folder: "assets/images/cars/TOYOTA HARRIER 2012",
  images: [
    "IMG_3898.JPG",
    "IMG_3921.JPG",
    "IMG_3923.JPG",
    "IMG_3897.JPG",
    "IMG_3911.JPG",
    "IMG_3912.JPG",
    "IMG_3915.JPG",
    "IMG_3917.JPG"
  ]
  },
  {
    id: 3,
    name: "Toyota Landcruiser V8 ZX",
    transmission: "Automatic",
    color: "Black",
    model: "2018",
    folder: "assets/images/cars/V8 ZX BLACK CANON",
    images: [
      "IMG_1507.JPG",
      "IMG_1506.JPG",
      "IMG_1511.JPG",
      "IMG_1513.JPG",
      "IMG_1519.JPG",
      "IMG_1522.JPG",
      "IMG_1524.JPG"
    ]
  },
  {
    id: 4,
    name: "Toyota Landcruiser ZX",
    transmission: "Automatic",
    color: "White",
    model: "2022",
    folder: "assets/images/cars/ZX WHITE",
    images: [
      "IMG_1547.JPG",
      "IMG_1539.JPG",
      "IMG_1543.JPG",
      "IMG_1544.JPG",
      "IMG_1559.JPG",
      "IMG_1561.JPG",
      "IMG_1564.JPG",
      "IMG_1565.JPG"
    ]
  },
  {
    id: 5,
    name: "Lexus LX570",
    transmission: "Automatic",
    color: "White",
    model: "2020",
    folder: "assets/images/cars/LEXUS LX570  CANON",
    images: [
      "IMG_3518.JPG",
      "IMG_3516.JPG",
      "IMG_3521.JPG",
      "IMG_3522.JPG",
      "IMG_3525.JPG",
      "IMG_3526.JPG",
      "IMG_3527.JPG",
      "IMG_3530.JPG",
      "IMG_3534.JPG",
      "IMG_3542.JPG"
    ]
  },
  {
    id: 6,
    name: "Lexus LX600",
    transmission: "Automatic",
    color: "White",
    model: "2024",
    folder: "assets/images/cars/LEXUS LX600",
    images: [
      "IMG_1978.JPG",
      "IMG_1967.JPG",
      "IMG_1970.JPG",
      "IMG_1971.JPG",
      "IMG_1976.JPG",
      "IMG_1981.JPG"
    ]
  },
  {
    id: 7,
    name: "Toyota Harrier",
    transmission: "Automatic",
    color: "Pearl White",
    model: "2017",
    folder: "assets/images/cars/HARRIER 2017 CANON",
    images: [
      "IMG_3061.JPG",
      "IMG_3069.JPG",
      "IMG_3060.JPG",
      "IMG_3066.JPG",
      "IMG_3068.JPG"
    ]
  },
  {
    id: 8,
    name: "Toyota Harrier",
    transmission: "Automatic",
    color: "White",
    model: "2015",
    folder: "assets/images/cars/Harrier Canon",
    images: [
      "IMG_1135.JPG",
      "IMG_1097.JPG",
      "IMG_1099.JPG",
      "IMG_1101.JPG",
      "IMG_1106.JPG",
      "IMG_1113.JPG",
      "IMG_1122.JPG",
      "IMG_1130.JPG",
      "IMG_1132.JPG"
    ]
  },
  {
    id: 9,
    name: "Toyota Vanguard",
    transmission: "Automatic",
    color: "Black",
    model: "2012",
    folder: "assets/images/cars/VANGUARD CANON",
    images: [
      "IMG_3756.JPG",
      "IMG_3755.JPG",
      "IMG_3757.JPG",
      "IMG_3758.JPG",
      "IMG_3759.JPG",
      "IMG_3761.JPG",
      "IMG_3762.JPG",
      "IMG_3763.JPG"
    ]
  },
  {
    id: 10,
    name: "Toyota Landcruiser Prado",
    transmission: "Automatic",
    color: "Black",
    model: "2025",
    folder: "assets/images/cars/PRADO 2025 CANON",
    images: [
      "IMG_3960.JPG",
      "IMG_3959.JPG",
      "IMG_3961.JPG",
      "IMG_3962.JPG",
      "IMG_3963.JPG",
      "IMG_3966.JPG",
      "IMG_3968.JPG"
    ]
  },
  {
    id: 11,
    name: "Mazda CX-5",
    transmission: "Automatic",
    color: "Blue",
    model: "2017",
    folder: "assets/images/cars/2017 CX-5",
    images: [
      "IMG_1476.JPG",
      "IMG_1496.JPG",
      "IMG_1498.JPG",
      "IMG_1499.JPG",
      "IMG_1472.JPG",
      "IMG_1474.JPG",
      "IMG_1477.JPG",
      "IMG_1479.JPG",
      "IMG_1485.JPG",
      "IMG_1490.JPG"
    ]
  },
  {
    id: 12,
    name: "Mazda CX-5",
    transmission: "Automatic",
    color: "Gray",
    model: "2016",
    folder: "assets/images/cars/MAZDA CX-5 2016 GRAY CANON",
    images: [
      "IMG_3498.JPG",
      "IMG_3499.JPG",
      "IMG_3500.JPG",
      "IMG_3501.JPG",
      "IMG_3502.JPG",
      "IMG_3512.JPG",
      "IMG_3514.JPG"
    ]
  },
  {
    id: 13,
    name: "Mazda CX-5",
    transmission: "Automatic",
    color: "Silver",
    model: "2016",
    folder: "assets/images/cars/CX-5 2016 CANON",
    images: [
      "IMG_3373.JPG",
      "IMG_3447.JPG",
      "IMG_3449.JPG",
      "IMG_3374.JPG",
      "IMG_3375.JPG",
      "IMG_3376.JPG"
    ]
  },
  {
    id: 14,
    name: "Toyota Alphard",
    transmission: "Automatic",
    color: "Silver",
    model: "2013",
    folder: "assets/images/cars/ALPHARD CANON",
    images: [
      "IMG_3699.JPG",
      "IMG_3702.JPG",
      "IMG_3705.JPG",
      "IMG_3711.JPG",
      "IMG_3700.JPG",
      "IMG_3701.JPG"
    ]
  },
  {
    id: 15,
    name: "Toyota Noah",
    transmission: "Automatic",
    color: "Black",
    model: "2012",
    folder: "assets/images/cars/BLACK NOAH CANON",
    images: [
      "IMG_3738.JPG",
      "IMG_3743.JPG",
      "IMG_3749.JPG",
      "IMG_3737.JPG",
      "IMG_3739.JPG",
      "IMG_3740.JPG"
    ]
  },
  {
    id: 16,
    name: "Toyota Corolla Fielder",
    transmission: "Manual",
    color: "Silver",
    model: "2017",
    folder: "assets/images/cars/FIELDER 2017 CANON",
    images: [
      "IMG_3231.JPG",
      "IMG_3235.JPG",
      "IMG_3279.JPG",
      "IMG_3289.JPG",
      "IMG_3230.JPG",
      "IMG_3232.JPG",
      "IMG_3233.JPG"
    ]
  },
  {
    id: 17,
    name: "Toyota Corolla Fielder",
    transmission: "Automatic",
    color: "Silver",
    model: "2013",
    folder: "assets/images/cars/FIELDER LATEST CANON",
    images: [
      "IMG_2844.JPG",
      "IMG_2833.JPG",
      "IMG_2836.JPG",
      "IMG_2838.JPG",
      "IMG_2839.JPG"
    ]
  },
  {
    id: 18,
    name: "Subaru Forester",
    transmission: "Automatic",
    color: "Black",
    model: "2012",
    folder: "assets/images/cars/FORESTER LATEST CANON",
    images: [
      "IMG_2822.JPG",
      "IMG_2828.JPG",
      "IMG_2821.JPG",
      "IMG_2825.JPG",
      "IMG_2826.JPG",
      "IMG_2827.JPG"
    ]
  },
  {
    id: 19,
    name: "Subaru Forester",
    transmission: "Automatic",
    color: "Black",
    model: "2011",
    folder: "assets/images/cars/FORESTER NEW BLACK CANON",
    images: [
      "IMG_2021.JPG",
      "IMG_2037.JPG",
      "IMG_2022.JPG",
      "IMG_2024.JPG",
      "IMG_2026.JPG",
      "IMG_2030.JPG"
    ]
  },
  {
    id: 20,
    name: "Toyota Wish",
    transmission: "Automatic",
    color: "Gold",
    model: "2013",
    folder: "assets/images/cars/GOLDEN WISH CANON",
    images: [
      "IMG_1870.JPG",
      "IMG_1883.JPG",
      "IMG_1884.JPG",
      "IMG_1871.JPG",
      "IMG_1873.JPG",
      "IMG_1875.JPG",
      "IMG_1879.JPG"
    ]
  },
  {
    id: 21,
    name: "Toyota Hiace",
    transmission: "Manual",
    color: "White",
    model: "2012",
    folder: "assets/images/cars/HIACE",
    images: [
      "IMG_1910.JPG",
      "IMG_1908.JPG",
      "IMG_1912.JPG",
      "IMG_1914.JPG",
      "IMG_1917.JPG"
    ]
  },
  {
    id: 22,
    name: "Subaru Impreza",
    transmission: "Automatic",
    color: "Silver",
    model: "2014",
    folder: "assets/images/cars/Impreza Canon",
    images: [
      "IMG_1215.JPG",
      "IMG_1205.JPG",
      "IMG_1211.JPG",
      "IMG_1217.JPG",
      "IMG_1220.JPG",
      "IMG_1228.JPG"
    ]
  },
  {
    id: 23,
    name: "Isuzu Forward",
    transmission: "Manual",
    color: "White",
    model: "1995",
    folder: "assets/images/cars/ISUZU FORWARD",
    images: [
      "IMG_1705.JPG",
      "IMG_1696.JPG",
      "IMG_1699.JPG",
      "IMG_1704.JPG",
      "IMG_1709.JPG",
      "IMG_1710.JPG",
      "IMG_1732.JPG",
      "IMG_1734.JPG"
    ]
  },
  {
    id: 24,
    name: "Mercedes Benz ML350 4Matic",
    transmission: "Automatic",
    color: "Black",
    model: "2010",
    folder: "assets/images/cars/MERCEDES 4MATIC CANON",
    images: [
      "IMG_3322.JPG",
      "IMG_3323.JPG",
      "IMG_3325.JPG",
      "IMG_3326.JPG",
      "IMG_3327.JPG",
      "IMG_3330.JPG",
      "IMG_3333.JPG",
      "IMG_3334.JPG",
      "IMG_3338.JPG"
    ]
  },
  {
    id: 25,
    name: "Subaru Outback",
    transmission: "Automatic",
    color: "Black",
    model: "2011",
    folder: "assets/images/cars/Outback Canon",
    images: [
      "IMG_1344.JPG",
      "IMG_1333.JPG",
      "IMG_1335.JPG",
      "IMG_1337.JPG",
      "IMG_1339.JPG",
      "IMG_1346.JPG"
    ]
  },
  {
    id: 26,
    name: "Toyota Passo",
    transmission: "Automatic",
    color: "Desert Khaki",
    model: "2011",
    folder: "assets/images/cars/PASSO CANON",
    images: [
      "IMG_2801.JPG",
      "IMG_2799.JPG",
      "IMG_2803.JPG",
      "IMG_2806.JPG",
      "IMG_2808.JPG",
      "IMG_2810.JPG",
      "IMG_2811.JPG",
      "IMG_2813.JPG"
    ]
  },
  {
    id: 27,
    name: "Toyota Probox",
    transmission: "Automatic",
    color: "White",
    model: "2016",
    folder: "assets/images/cars/PROBOX 2016 CANON",
    images: [
      "IMG_3300.JPG",
      "IMG_3301.JPG",
      "IMG_3303.JPG",
      "IMG_3304.JPG",
      "IMG_3306.JPG",
      "IMG_3310.JPG",
      "IMG_3314.JPG"
    ]
  },
  {
    id: 28,
    name: "Toyota Rumion",
    transmission: "Automatic",
    color: "White",
    model: "2012",
    folder: "assets/images/cars/WHITE RUMION CANON",
    images: [
      "IMG_3571.JPG",
      "IMG_3570.JPG",
      "IMG_3572.JPG",
      "IMG_3574.JPG",
      "IMG_3576.JPG",
      "IMG_3587.JPG"
    ]
  }
];

>>>>>>> 0cba6d2 (Update website files)
/* ---------- INVENTORY: RENDER + PAGINATION ---------- */
(function() {
  const inventoryGrid = document.getElementById('inventory-grid');
  if (!inventoryGrid) return; // only run on inventory page

<<<<<<< HEAD
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

=======
>>>>>>> 0cba6d2 (Update website files)
  let currentPage = 1;
  const carsPerPage = 10;
  const pageInfoEl = document.getElementById('page-info');
  const prevPageBtn = document.getElementById('prev-page');
  const nextPageBtn = document.getElementById('next-page');

<<<<<<< HEAD
  // Render current page
=======
>>>>>>> 0cba6d2 (Update website files)
  function renderInventory() {
    inventoryGrid.innerHTML = '';

    const start = (currentPage - 1) * carsPerPage;
    const end = start + carsPerPage;
    const pageCars = cars.slice(start, end);

    pageCars.forEach((car) => {
      const card = document.createElement('div');
      card.className = 'inventory-car';

<<<<<<< HEAD
      card.innerHTML = `
        <div class="car-top">
          <img class="main-img" src="${car.images[0]}" alt="${car.name}">
=======
      const mainImage = car.images.length ? `${car.folder}/${car.images[0]}` : "";
      card.innerHTML = `
        <div class="car-top">
          <img class="main-img" src="${mainImage}" alt="${car.name}">
>>>>>>> 0cba6d2 (Update website files)
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
<<<<<<< HEAD
      const mainImg = card.querySelector('.main-img');
      mainImg.style.width = '720px';
      mainImg.style.maxWidth = '100%';
      mainImg.style.height = '360px';
      mainImg.style.objectFit = 'cover';
      mainImg.style.borderRadius = '10px';
      mainImg.style.display = 'block';
      mainImg.style.margin = '0 auto';
=======
const mainImg = card.querySelector('.main-img');
mainImg.style.width = '720px';
mainImg.style.maxWidth = '100%';
mainImg.style.height = '240px';        // reduce height so full car fits
mainImg.style.objectFit = 'contain';   // show full car without cropping
mainImg.style.borderRadius = '10px';
mainImg.style.display = 'block';
mainImg.style.margin = '0 auto';

>>>>>>> 0cba6d2 (Update website files)
    });

    if (pageInfoEl) pageInfoEl.innerText = `Page ${currentPage}`;
  }

<<<<<<< HEAD
  // Pagination handlers
=======
>>>>>>> 0cba6d2 (Update website files)
  if (prevPageBtn) prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderInventory();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
<<<<<<< HEAD
=======

>>>>>>> 0cba6d2 (Update website files)
  if (nextPageBtn) nextPageBtn.addEventListener('click', () => {
    const maxPage = Math.ceil(cars.length / carsPerPage);
    if (currentPage < maxPage) {
      currentPage++;
      renderInventory();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

<<<<<<< HEAD
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
=======
  renderInventory();
})();

>>>>>>> 0cba6d2 (Update website files)
