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
        <img class="contentCard" src="${image.webformatURL}" alt="${image.tags}">
      </a>
      <div class="imgCard">
      <p><b>Likes:</b> ${image.likes}</p>
      <p><b>Views:</b> ${image.views}</p>
      <p><b>Comments:</b> ${image.comments}</p>
      <p><b>Downloads:</b> ${image.downloads}</p></div>
    `;
    galleryElement.appendChild(card);
  });
}
