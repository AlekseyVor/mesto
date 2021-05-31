import {photoImg,photoTitle,popupPhoto} from '../utils/constants.js';
import {openPopup} from '../utils/utils.js';

export default class Card {
    constructor(title, image, cardSelector){
    this._title = title;
    this._image = image;
    this._cardSelector = cardSelector;
    
    }

    _getTemplate() {
        const cardElement = document
        .querySelector (this._cardSelector)
        .content
        .querySelector ('.place')
        .cloneNode(true);
        return cardElement;
    }

    _pastePopupPhoto() {
        photoImg.src = this._image;
        photoImg.alt = this._title;
        photoTitle.textContent = this._title;
    }

    _setEventListeners() {
        this._element.querySelector('.place__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('place__like_active');
        });
        this._element.querySelector('.place__delete').addEventListener('click', () => {
        this._element.remove();
        });
        this._element.querySelector('.place__image').addEventListener('click', () => {
        this._pastePopupPhoto();
        openPopup(popupPhoto);
        });
    }


    generateCard() {
        this._element = this._getTemplate();
        this._getTemplate();
        
        this._setEventListeners();

        this._element.querySelector('.place__title').textContent = this._title;
        this._element.querySelector('.place__image').src = this._image;
        this._element.querySelector('.place__image').alt = this._image;

        return this._element;
    }
    
}