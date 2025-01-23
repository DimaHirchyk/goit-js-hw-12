import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { creatingRequestPhoto } from './js/pixabay';
import { creatGalleryCard } from './js/render-function';

const inputFormEl = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnMore = document.querySelector('.load-more');

loader.style.display = 'none';
btnMore.style.display = 'none';

let question = '';
let page = 1;
const perPage = 15;

const galleryModal = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

const searchingFoto = event => {
  event.preventDefault();

  question = event.target.elements.query.value.trim();

  gallery.innerHTML = '';

  if (!question) {
    iziToast.show({
      backgroundColor: '#EF4040',
      message: `Enter the data for the search!`,
      messageColor: '#FFFFFF',
      position: 'topRight',
    });
    return;
  }

  loader.style.display = 'flex';

  creatingRequestPhoto(question)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          title: '',
          backgroundColor: '#EF4040',
          messageColor: '#FFFFFF',
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
        });
      }

      page = 1;

      gallery.insertAdjacentHTML('beforeend', creatGalleryCard(data.hits));
      galleryModal.refresh();
      loader.style.display = 'none';

      if (page * perPage < data.totalHits) {
        btnMore.style.display = 'flex';
      }
    })
    .catch(error => {
      console.log(error.message);
    })
    .finally(() => event.target.reset());
};

async function onLoadMore() {
  page += 1;
  btnMore.disabled = true;

  btnMore.style.display = 'none';
  loader.style.display = 'flex';

  try {
    const data = await creatingRequestPhoto(question, page);

    gallery.insertAdjacentHTML('beforeend', creatGalleryCard(data.hits));
    galleryModal.refresh();
    loader.style.display = 'none';

    if (page * perPage >= data.totalHits) {
      btnMore.style.display = 'none';
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'bottomCenter',
        timeout: 10000,
      });
    } else {
      btnMore.style.display = 'flex';
    }

    const cardHeight = document
      .querySelector('.gallery-item')
      .getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log(error.message);
  } finally {
    btnMore.disabled = false;
  }
}

inputFormEl.addEventListener('submit', searchingFoto);
btnMore.addEventListener('click', onLoadMore);
