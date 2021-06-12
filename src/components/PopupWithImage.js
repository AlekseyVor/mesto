import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(config, popupSelector) {
        super(config, popupSelector)
        this._popupImg = document.querySelector(this._config.popupPhotoImgSelector);
        this._popupTitle = document.querySelector(this._config.popupPhotoTitleSelector);
    }

    open(image, title) {
        super.open();
        this._popupImg.src = image;
        this._popupImg.alt = title;
        this._popupTitle.textContent = title;
    }
    
}