import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { spinnerPlay, spinnerStop } from './js/spinner';
import { imgContainer, formEl } from './js/refs';
import { searchImages } from './js/searchImages';


const handleSubmit = event => {
  event.preventDefault();
  spinnerPlay();

  const searchQuery = formEl.querySelector('.search-input').value;

  if (searchQuery.trim() !== '') {
    imgContainer.innerHTML =
      '<p class="loading-message">Loading images, please wait...</p>';
      searchImages(searchQuery);
  } else {
    imgContainer.innerHTML = '';
    spinnerStop();
    return iziToast.warning({
      position: 'center',
      message: 'Please enter a search query.',
    });
  }
};

formEl.addEventListener('submit', handleSubmit);