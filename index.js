// Zmiana zdjęć w galerii
const mainImage = document.querySelector('#main-image');
const changeImage = (url) => mainImage.setAttribute('src', url);

// Obliczanie wywołania zdjęcia
const calulateCost = () => {
  const howMuchImages = document.querySelector('#Ile').value;
  const formatOfImagesToPrint = document.querySelector('#Format').value;
  const output = document.querySelector('.output');

  const prices = {
    1: { standard: 0.29, discount: 0.25 },
    2: { standard: 0.49, discount: 0.45 },
    3: { standard: 0.74, discount: 0.69 },
  };

  if (!['1', '2', '3'].includes(formatOfImagesToPrint)) {
    output.textContent = 'Proszę wprowadzić format jako 1, 2, lub 3.';
    return;
  }

  const format = prices[formatOfImagesToPrint];
  const isDiscount = howMuchImages > 123;
  const costs = isDiscount ? howMuchImages * format.discount : howMuchImages * format.standard;

  if (!isNaN(costs)) {
    output.textContent = `Koszt: ${costs.toFixed(2)}zł`;
  } else {
    output.textContent = 'Proszę wprowadzić prawidłowe wartości.';
  }
};

// Zmiana koloru strony
const personlize = () => {
  const elementsToStyle = {
    header: { query: 'header', saturation: 100 },
    footer: { query: 'footer', saturation: 100 },
    photoPreview: { query: '#photo-preview', saturation: 60 },
    personalization: { query: '#personalization', saturation: 60 },
    galleryPreview: { query: '#gallery-preview', saturation: 20 },
    calculatePhotos: { query: '#calculate-photos', saturation: 20 },
  };

  const hsl = (H, S) => `hsl(${H}, ${S}%, 50%)`;
  const H = prompt('Podaj H');

  Object.values(elementsToStyle).forEach(({ query, saturation }) => {
    const element = document.querySelector(query);
    element.style.backgroundColor = hsl(H, saturation);
  });
};
