import { BASE_URL, API_KEY } from "./refs";
import { displayImages } from "./displayImages";

export const searchImages = query => {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Response is not success: ${response.status}`);
      }

      return response.json();
    })
    .then(data => {
      displayImages(data.hits);
    })
    .catch(error => {
      console.error(error);
    });
};
