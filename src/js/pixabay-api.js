const apiKey = '43214760-0343bbd140b24677312cd0c55';

export async function fetchImages(keyword) {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${keyword}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await fetch(url);
  const data = await response.json();
  return data.hits;
}
