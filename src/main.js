const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '41741201-12a642cf53882fe64e8e82723';
const formEl = document.querySelector('.search-form');
const imgContainer = document.querySelector('.img-container');

//заменить сообщения на библиотеку изитост

formEl.addEventListener('submit', event => {
    event.preventDefault();
    const searchQuery = formEl.querySelector('.search-input').value;

    if(searchQuery.trim() !== '') {
        searchImages(searchQuery);
    } else {
        alert('Please enter a search query.');
    }
});


const searchImages = (query) => {
    const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

    fetch(url)
        .then(response => {
            if(!response.ok) {
                throw new Error(`Response is not success: ${response.status}`)
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

const displayImages = (images) => {
    imgContainer.innerHTML = '';

    if(images.length > 0) {
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

        infoDiv.appendChild(likesInfo);
        infoDiv.appendChild(viewsInfo);
        infoDiv.appendChild(commentsInfo);
        infoDiv.appendChild(downloadsInfo);

        imgItem.appendChild(imgEl);
        imgItem.appendChild(infoDiv);

        imgContainer.appendChild(imgItem);

        });

 } else {
        imgContainer.innerHTML = '<p>Sorry, there are no images matching your search query. Please try again!</p>';
    }

};