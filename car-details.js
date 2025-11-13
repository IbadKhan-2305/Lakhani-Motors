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
  {
    id: 2,
    name: "Toyota Harrier",
    model: "2012",
    color: "Black",
    transmission: "Automatic",
    images: [
      "assets/images/cars/TOYOTA HARRIER 2012/IMG_3921.JPG",
      "assets/images/cars/TOYOTA HARRIER 2012/IMG_3923.JPG",
      "assets/images/cars/TOYOTA HARRIER 2012/IMG_3897.JPG",
      "assets/images/cars/TOYOTA HARRIER 2012/IMG_3911.JPG",
      "assets/images/cars/TOYOTA HARRIER 2012/IMG_3912.JPG",
      "assets/images/cars/TOYOTA HARRIER 2012/IMG_3915.JPG",
      "assets/images/cars/TOYOTA HARRIER 2012/IMG_3917.JPG"
    ]
  },
  {
    id: 3,
    name: "Toyota Landcruiser V8 ZX",
    model: "2018",
    color: "Black",
    transmission: "Automatic",
    images: [
      "assets/images/cars/V8 ZX BLACK CANON/IMG_1506.JPG",
      "assets/images/cars/V8 ZX BLACK CANON/IMG_1511.JPG",
      "assets/images/cars/V8 ZX BLACK CANON/IMG_1513.JPG",
      "assets/images/cars/V8 ZX BLACK CANON/IMG_1519.JPG",
      "assets/images/cars/V8 ZX BLACK CANON/IMG_1522.JPG",
      "assets/images/cars/V8 ZX BLACK CANON/IMG_1524.JPG"
    ]
  },
  {
    id: 4,
    name: "Toyota Landcruiser ZX",
    model: "2022",
    color: "White",
    transmission: "Automatic",
    images: [
      "assets/images/cars/ZX WHITE/IMG_1539.JPG",
      "assets/images/cars/ZX WHITE/IMG_1543.JPG",
      "assets/images/cars/ZX WHITE/IMG_1544.JPG",
      "assets/images/cars/ZX WHITE/IMG_1559.JPG",
      "assets/images/cars/ZX WHITE/IMG_1561.JPG",
      "assets/images/cars/ZX WHITE/IMG_1564.JPG",
      "assets/images/cars/ZX WHITE/IMG_1565.JPG"
    ]
  },
  {
    id: 5,
    name: "Lexus LX570",
    model: "2020",
    color: "White",
    transmission: "Automatic",
    images: [
      "assets/images/cars/LEXUS LX570  CANON/IMG_3516.JPG",
      "assets/images/cars/LEXUS LX570  CANON/IMG_3521.JPG",
      "assets/images/cars/LEXUS LX570  CANON/IMG_3522.JPG",
      "assets/images/cars/LEXUS LX570  CANON/IMG_3525.JPG",
      "assets/images/cars/LEXUS LX570  CANON/IMG_3526.JPG",
      "assets/images/cars/LEXUS LX570  CANON/IMG_3527.JPG",
      "assets/images/cars/LEXUS LX570  CANON/IMG_3530.JPG",
      "assets/images/cars/LEXUS LX570  CANON/IMG_3534.JPG",
      "assets/images/cars/LEXUS LX570  CANON/IMG_3542.JPG"
    ]
  },
  {
    id: 6,
    name: "Lexus LX600",
    model: "2024",
    color: "White",
    transmission: "Automatic",
    images: [
      "assets/images/cars/LEXUS LX600/IMG_1967.JPG",
      "assets/images/cars/LEXUS LX600/IMG_1970.JPG",
      "assets/images/cars/LEXUS LX600/IMG_1971.JPG",
      "assets/images/cars/LEXUS LX600/IMG_1976.JPG",
      "assets/images/cars/LEXUS LX600/IMG_1981.JPG"
    ]
  },
  {
    id: 7,
    name: "Toyota Harrier",
    model: "2017",
    color: "Pearl White",
    transmission: "Automatic",
    images: [
      "assets/images/cars/HARRIER 2017 CANON/IMG_3069.JPG",
      "assets/images/cars/HARRIER 2017 CANON/IMG_3060.JPG",
      "assets/images/cars/HARRIER 2017 CANON/IMG_3066.JPG",
      "assets/images/cars/HARRIER 2017 CANON/IMG_3068.JPG"
    ]
  },
  {
    id: 8,
    name: "Toyota Harrier",
    model: "2015",
    color: "White",
    transmission: "Automatic",
    images: [
      "assets/images/cars/Harrier Canon/IMG_1097.JPG",
      "assets/images/cars/Harrier Canon/IMG_1099.JPG",
      "assets/images/cars/Harrier Canon/IMG_1101.JPG",
      "assets/images/cars/Harrier Canon/IMG_1106.JPG",
      "assets/images/cars/Harrier Canon/IMG_1113.JPG",
      "assets/images/cars/Harrier Canon/IMG_1122.JPG",
      "assets/images/cars/Harrier Canon/IMG_1130.JPG",
      "assets/images/cars/Harrier Canon/IMG_1132.JPG"
    ]
  },
  {
    id: 9,
    name: "Toyota Vanguard",
    model: "2012",
    color: "Black",
    transmission: "Automatic",
    images: [
      "assets/images/cars/VANGUARD CANON/IMG_3755.JPG",
      "assets/images/cars/VANGUARD CANON/IMG_3757.JPG",
      "assets/images/cars/VANGUARD CANON/IMG_3758.JPG",
      "assets/images/cars/VANGUARD CANON/IMG_3759.JPG",
      "assets/images/cars/VANGUARD CANON/IMG_3761.JPG",
      "assets/images/cars/VANGUARD CANON/IMG_3762.JPG",
      "assets/images/cars/VANGUARD CANON/IMG_3763.JPG"
    ]
  },
  {
    id: 10,
    name: "Toyota Landcruiser Prado",
    model: "2025",
    color: "Black",
    transmission: "Automatic",
    images: [
      "assets/images/cars/PRADO 2025 CANON/IMG_3959.JPG",
      "assets/images/cars/PRADO 2025 CANON/IMG_3961.JPG",
      "assets/images/cars/PRADO 2025 CANON/IMG_3962.JPG",
      "assets/images/cars/PRADO 2025 CANON/IMG_3963.JPG",
      "assets/images/cars/PRADO 2025 CANON/IMG_3966.JPG",
      "assets/images/cars/PRADO 2025 CANON/IMG_3968.JPG"
    ]
  },
  {
    id: 11,
    name: "Mazda CX-5",
    model: "2017",
    color: "Blue",
    transmission: "Automatic",
    images: [
      "assets/images/cars/2017 CX-5/IMG_1496.JPG",
      "assets/images/cars/2017 CX-5/IMG_1498.JPG",
      "assets/images/cars/2017 CX-5/IMG_1499.JPG",
      "assets/images/cars/2017 CX-5/IMG_1472.JPG",
      "assets/images/cars/2017 CX-5/IMG_1474.JPG",
      "assets/images/cars/2017 CX-5/IMG_1477.JPG",
      "assets/images/cars/2017 CX-5/IMG_1479.JPG",
      "assets/images/cars/2017 CX-5/IMG_1485.JPG",
      "assets/images/cars/2017 CX-5/IMG_1490.JPG"
    ]
  },
  {
    id: 12,
    name: "Mazda CX-5",
    model: "2016",
    color: "Gray",
    transmission: "Automatic",
    images: [
      "assets/images/cars/MAZDA CX-5 2016 GRAY CANON/IMG_3499.JPG",
      "assets/images/cars/MAZDA CX-5 2016 GRAY CANON/IMG_3500.JPG",
      "assets/images/cars/MAZDA CX-5 2016 GRAY CANON/IMG_3501.JPG",
      "assets/images/cars/MAZDA CX-5 2016 GRAY CANON/IMG_3502.JPG",
      "assets/images/cars/MAZDA CX-5 2016 GRAY CANON/IMG_3512.JPG",
      "assets/images/cars/MAZDA CX-5 2016 GRAY CANON/IMG_3514.JPG"
    ]
  },
  {
    id: 13,
    name: "Mazda CX-5",
    model: "2016",
    color: "Silver",
    transmission: "Automatic",
    images: [
      "assets/images/cars/CX-5 2016 CANON/IMG_3447.JPG",
      "assets/images/cars/CX-5 2016 CANON/IMG_3449.JPG",
      "assets/images/cars/CX-5 2016 CANON/IMG_3374.JPG",
      "assets/images/cars/CX-5 2016 CANON/IMG_3375.JPG",
      "assets/images/cars/CX-5 2016 CANON/IMG_3376.JPG"
    ]
  },
  {
    id: 14,
    name: "Toyota Alphard",
    model: "2013",
    color: "Silver",
    transmission: "Automatic",
    images: [
      "assets/images/cars/ALPHARD CANON/IMG_3702.JPG",
      "assets/images/cars/ALPHARD CANON/IMG_3705.JPG",
      "assets/images/cars/ALPHARD CANON/IMG_3711.JPG",
      "assets/images/cars/ALPHARD CANON/IMG_3700.JPG",
      "assets/images/cars/ALPHARD CANON/IMG_3701.JPG"
    ]
  },
  {
    id: 15,
    name: "Toyota Noah",
    model: "2012",
    color: "Black",
    transmission: "Automatic",
    images: [
      "assets/images/cars/BLACK NOAH CANON/IMG_3743.JPG",
      "assets/images/cars/BLACK NOAH CANON/IMG_3749.JPG",
      "assets/images/cars/BLACK NOAH CANON/IMG_3737.JPG",
      "assets/images/cars/BLACK NOAH CANON/IMG_3739.JPG",
      "assets/images/cars/BLACK NOAH CANON/IMG_3740.JPG"
    ]
  },
  {
    id: 16,
    name: "Toyota Corolla Fielder",
    model: "2017",
    color: "Silver",
    transmission: "Manual",
    images: [
      "assets/images/cars/FIELDER 2017 CANON/IMG_3235.JPG",
      "assets/images/cars/FIELDER 2017 CANON/IMG_3279.JPG",
      "assets/images/cars/FIELDER 2017 CANON/IMG_3289.JPG",
      "assets/images/cars/FIELDER 2017 CANON/IMG_3230.JPG",
      "assets/images/cars/FIELDER 2017 CANON/IMG_3232.JPG",
      "assets/images/cars/FIELDER 2017 CANON/IMG_3233.JPG"
    ]
  },
  {
    id: 17,
    name: "Toyota Corolla Fielder",
    model: "2013",
    color: "Silver",
    transmission: "Automatic",
    images: [
      "assets/images/cars/FIELDER LATEST CANON/IMG_2833.JPG",
      "assets/images/cars/FIELDER LATEST CANON/IMG_2836.JPG",
      "assets/images/cars/FIELDER LATEST CANON/IMG_2838.JPG",
      "assets/images/cars/FIELDER LATEST CANON/IMG_2839.JPG"
    ]
  },
  {
    id: 18,
    name: "Subaru Forester",
    model: "2012",
    color: "Black",
    transmission: "Automatic",
    images: [
      "assets/images/cars/FORESTER LATEST CANON/IMG_2828.JPG",
      "assets/images/cars/FORESTER LATEST CANON/IMG_2821.JPG",
      "assets/images/cars/FORESTER LATEST CANON/IMG_2825.JPG",
      "assets/images/cars/FORESTER LATEST CANON/IMG_2826.JPG",
      "assets/images/cars/FORESTER LATEST CANON/IMG_2827.JPG"
    ]
  },
  {
    id: 19,
    name: "Subaru Forester",
    model: "2011",
    color: "Black",
    transmission: "Automatic",
    images: [
      "assets/images/cars/FORESTER NEW BLACK CANON/IMG_2037.JPG",
      "assets/images/cars/FORESTER NEW BLACK CANON/IMG_2022.JPG",
      "assets/images/cars/FORESTER NEW BLACK CANON/IMG_2024.JPG",
      "assets/images/cars/FORESTER NEW BLACK CANON/IMG_2026.JPG",
      "assets/images/cars/FORESTER NEW BLACK CANON/IMG_2030.JPG"
    ]
  },
  {
    id: 20,
    name: "Toyota Wish",
    model: "2013",
    color: "Gold",
    transmission: "Automatic",
    images: [
      "assets/images/cars/GOLDEN WISH CANON/IMG_1883.JPG",
      "assets/images/cars/GOLDEN WISH CANON/IMG_1884.JPG",
      "assets/images/cars/GOLDEN WISH CANON/IMG_1871.JPG",
      "assets/images/cars/GOLDEN WISH CANON/IMG_1873.JPG",
      "assets/images/cars/GOLDEN WISH CANON/IMG_1875.JPG",
      "assets/images/cars/GOLDEN WISH CANON/IMG_1879.JPG"
    ]
  },
  {
    id: 21,
    name: "Toyota Hiace",
    model: "2012",
    color: "White",
    transmission: "Manual",
    images: [
      "assets/images/cars/HIACE/IMG_1908.JPG",
      "assets/images/cars/HIACE/IMG_1912.JPG",
      "assets/images/cars/HIACE/IMG_1914.JPG",
      "assets/images/cars/HIACE/IMG_1917.JPG"
    ]
  },
  {
    id: 22,
    name: "Subaru Impreza",
    model: "2014",
    color: "Silver",
    transmission: "Automatic",
    images: [
      "assets/images/cars/Impreza Canon/IMG_1205.JPG",
      "assets/images/cars/Impreza Canon/IMG_1211.JPG",
      "assets/images/cars/Impreza Canon/IMG_1217.JPG",
      "assets/images/cars/Impreza Canon/IMG_1220.JPG",
      "assets/images/cars/Impreza Canon/IMG_1228.JPG"
    ]
  },
  {
    id: 23,
    name: "Isuzu Forward",
    model: "1995",
    color: "White",
    transmission: "Manual",
    images: [
      "assets/images/cars/ISUZU FORWARD/IMG_1696.JPG",
      "assets/images/cars/ISUZU FORWARD/IMG_1699.JPG",
      "assets/images/cars/ISUZU FORWARD/IMG_1704.JPG",
      "assets/images/cars/ISUZU FORWARD/IMG_1709.JPG",
      "assets/images/cars/ISUZU FORWARD/IMG_1710.JPG",
      "assets/images/cars/ISUZU FORWARD/IMG_1732.JPG",
      "assets/images/cars/ISUZU FORWARD/IMG_1734.JPG"
    ]
  },
  {
    id: 24,
    name: "Mercedes Benz ML350 4Matic",
    model: "2010",
    color: "Black",
    transmission: "Automatic",
    images: [
      "assets/images/cars/MERCEDES 4MATIC CANON/IMG_3323.JPG",
      "assets/images/cars/MERCEDES 4MATIC CANON/IMG_3325.JPG",
      "assets/images/cars/MERCEDES 4MATIC CANON/IMG_3326.JPG",
      "assets/images/cars/MERCEDES 4MATIC CANON/IMG_3327.JPG",
      "assets/images/cars/MERCEDES 4MATIC CANON/IMG_3330.JPG",
      "assets/images/cars/MERCEDES 4MATIC CANON/IMG_3333.JPG",
      "assets/images/cars/MERCEDES 4MATIC CANON/IMG_3334.JPG",
      "assets/images/cars/MERCEDES 4MATIC CANON/IMG_3338.JPG"
    ]
  },
  {
    id: 25,
    name: "Subaru Outback",
    model: "2011",
    color: "Black",
    transmission: "Automatic",
    images: [
      "assets/images/cars/Outback Canon/IMG_1333.JPG",
      "assets/images/cars/Outback Canon/IMG_1335.JPG",
      "assets/images/cars/Outback Canon/IMG_1337.JPG",
      "assets/images/cars/Outback Canon/IMG_1339.JPG",
      "assets/images/cars/Outback Canon/IMG_1346.JPG"
    ]
  },
  {
    id: 26,
    name: "Toyota Passo",
    model: "2011",
    color: "Desert Khaki",
    transmission: "Automatic",
    images: [
      "assets/images/cars/PASSO CANON/IMG_2799.JPG",
      "assets/images/cars/PASSO CANON/IMG_2803.JPG",
      "assets/images/cars/PASSO CANON/IMG_2806.JPG",
      "assets/images/cars/PASSO CANON/IMG_2808.JPG",
      "assets/images/cars/PASSO CANON/IMG_2810.JPG",
      "assets/images/cars/PASSO CANON/IMG_2811.JPG",
      "assets/images/cars/PASSO CANON/IMG_2813.JPG"
    ]
  },
  {
    id: 27,
    name: "Toyota Probox",
    model: "2016",
    color: "White",
    transmission: "Automatic",
    images: [
      "assets/images/cars/PROBOX 2016 CANON/IMG_3301.JPG",
      "assets/images/cars/PROBOX 2016 CANON/IMG_3303.JPG",
      "assets/images/cars/PROBOX 2016 CANON/IMG_3304.JPG",
      "assets/images/cars/PROBOX 2016 CANON/IMG_3306.JPG",
      "assets/images/cars/PROBOX 2016 CANON/IMG_3310.JPG",
      "assets/images/cars/PROBOX 2016 CANON/IMG_3314.JPG"
    ]
  },
  {
    id: 28,
    name: "Toyota Rumion",
    model: "2012",
    color: "White",
    transmission: "Automatic",
    images: [
      "assets/images/cars/WHITE RUMION CANON/IMG_3570.JPG",
      "assets/images/cars/WHITE RUMION CANON/IMG_3572.JPG",
      "assets/images/cars/WHITE RUMION CANON/IMG_3574.JPG",
      "assets/images/cars/WHITE RUMION CANON/IMG_3576.JPG",
      "assets/images/cars/WHITE RUMION CANON/IMG_3587.JPG"
    ]
  }
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
