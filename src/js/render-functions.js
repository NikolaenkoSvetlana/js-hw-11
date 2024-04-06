export function clearGallery() {
  const galleryElement = document.getElementById('gallery');
  galleryElement.innerHTML = '';
}

export function renderImages(images) {
  const galleryElement = document.getElementById('gallery');
  images.forEach(image => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <a href="${image.largeImageURL}" data-lightbox="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}">
      </a>
      <p>Likes: ${image.likes}</p>
      <p>Views: ${image.views}</p>
      <p>Comments: ${image.comments}</p>
      <p>Downloads: ${image.downloads}</p>
    `;
    galleryElement.appendChild(card);
  });
}
