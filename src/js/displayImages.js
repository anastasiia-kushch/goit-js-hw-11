import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { spinnerStop } from './spinner';
import { imgContainer } from './refs';

export const displayImages = images => {
  imgContainer.innerHTML = '';

  if (images.length > 0) {
    images.forEach(image => {
      const imgItem = document.createElement('div');
      imgItem.classList.add('img-item');

      const imgEl = document.createElement('img');
      imgEl.src = image.webformatURL;
      imgEl.alt = image.tags;

      const infoDiv = document.createElement('div');
      infoDiv.classList.add('image-info');

      const likesInfo = document.createElement('p');
      likesInfo.textContent = `Likes: ${image.likes}`;
      const viewsInfo = document.createElement('p');
      viewsInfo.textContent = `Views: ${image.views}`;
      const commentsInfo = document.createElement('p');
      commentsInfo.textContent = `Comments: ${image.comments}`;
      const downloadsInfo = document.createElement('p');
      downloadsInfo.textContent = `Downloads: ${image.downloads}`;

      spinnerStop();

      infoDiv.appendChild(likesInfo);
      infoDiv.appendChild(viewsInfo);
      infoDiv.appendChild(commentsInfo);
      infoDiv.appendChild(downloadsInfo);

      imgItem.appendChild(imgEl);
      imgItem.appendChild(infoDiv);

      imgContainer.appendChild(imgItem);
    });
  } else {
    imgContainer.innerHTML = '';
    spinnerStop();
    iziToast.info({
      position: 'center',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
  }
};
