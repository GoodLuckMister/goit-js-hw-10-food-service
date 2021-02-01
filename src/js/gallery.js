import template from '../template/gallery-items.hbs';
import object from '../menu.json';

const galleryMarkup = template(object);
const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('afterbegin', galleryMarkup)