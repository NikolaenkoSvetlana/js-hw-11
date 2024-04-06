import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from '../src/js/pixabay-api.js';
import { clearGallery, renderImages } from '../src/js/render-functions.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const loader = document.querySelector('.loader');

searchForm.addEventListener('submit', async e => {
  e.preventDefault();
  const keyword = searchInput.value.trim();
  if (!keyword) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a keyword for search.',
    });
    return;
  }
  loader.style.display = 'block'; // Показати індикатор завантаження
  clearGallery(); // Очистити галерею перед новим пошуком
  try {
    const images = await fetchImages(keyword);
    if (images.length === 0) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
    } else {
      renderImages(images);
      // Після додавання нових елементів до списку зображень викликаємо метод refresh()
      const lightbox = new SimpleLightbox('[data-lightbox]');
      lightbox.refresh();
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      title: 'Error',
      message:
        'An error occurred while fetching images. Please try again later.',
    });
  } finally {
    loader.style.display = 'none'; // Приховати індикатор завантаження
  }
});
