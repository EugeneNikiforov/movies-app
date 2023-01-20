// import axios from 'axios';

import { LocaleStorageService } from './localeStorage';

const movieCards = document.querySelector('.card-list');

const refs = {
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.getElementById('button-modal-close'),
  modal: document.getElementById('modal'),
  modalImg: document.getElementById('modal-img'),
  modalTitle: document.getElementById('modal-title'),
  modalVote: document.getElementById('modal-vote'),
  modalVotes: document.getElementById('modal-votes'),
  modalPopular: document.getElementById('modal-popular'),
  modalOriginalTitle: document.getElementById('modal-original-title'),
  modalGenre: document.getElementById('modal-genre'),
  modalDescr: document.getElementById('modal-descr'),
  watchedBtn: document.getElementById('watchedBtn'),
  queueBtn: document.getElementById('queueBtn'),
};

class ModalService_ {
  elem = {};
  toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  generateModalContent() {
    refs.modalImg.setAttribute(
      'src',
      `https://image.tmdb.org/t/p/w500/${this.elem.poster_path}`
    );
    refs.modalTitle.textContent = this.elem.original_title;
    refs.modalVote.textContent = this.elem.vote_average.toFixed(1);
    refs.modalVotes.textContent = this.elem.vote_count;
    refs.modalPopular.textContent = this.elem.popularity.toFixed(1);
    refs.modalOriginalTitle.textContent = this.elem.original_title;
    refs.modalGenre.textContent = this.elem.genres
      .map(({ name }) => name)
      .join(', ');
    refs.modalDescr.textContent = this.elem.overview;
  }

  openModal(elem) {
    this.elem = elem;
    this.toggleModal();
    this.generateModalContent();
  }
  closeModal() {
    this.toggleModal();
  }

  saveToWatched() {
    LocaleStorageService.saveToLS('watched', this.elem);
    this.closeModal();
  }
  saveToQueue() {
    LocaleStorageService.saveToLS('queue', this.elem);
    this.closeModal();
  }
  init() {
    refs.closeModalBtn.addEventListener('click', this.closeModal.bind(this));
    refs.watchedBtn.addEventListener('click', this.saveToWatched.bind(this));
    refs.queueBtn.addEventListener('click', this.saveToQueue.bind(this));
  }
}

export const ModalService = new ModalService_();
ModalService.init();
