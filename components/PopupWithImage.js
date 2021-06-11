import Popup from './Popup.js';
import {photoImg,photoTitle} from '../utils/constants.js';

export default class PopupWithImage extends Popup {
    constructor(config, popupSelector) {
        super(config, popupSelector)}

    open(card) {
        this._popup.classList.add(this._config.popupActiveClass);
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
        photoImg.src = card._image;
        photoImg.alt = card._title;
        photoTitle.textContent = card._title;
        
    }
}