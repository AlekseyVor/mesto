export default class Card {
    constructor(config, title, image, cardSelector, handleCardClick){
    this._config = config;
    this._title = title;
    this._image = image;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    
    }

    _getTemplate() {
        const cardElement = document
        .querySelector (this._cardSelector)
        .content
        .querySelector (this._config.cardSelector)
        .cloneNode(true);
        return cardElement;
    }


    _setEventListeners() {
        this._element.querySelector(this._config.likeSelector).addEventListener('click', (evt) => {
        evt.target.classList.toggle(this._config.likeActiveClass);
        });
        this._element.querySelector(this._config.placeDeleteSelector).addEventListener('click', () => {
        this._element.remove();
        });
        this._element.querySelector(this._config.placeImageSelector).addEventListener('click', () => {
        this._handleCardClick(this);
        });
    }


    generateCard() {
        this._element = this._getTemplate();
        this._getTemplate();
        
        this._setEventListeners();

        this._element.querySelector(this._config.placeTitleSelector).textContent = this._title;
        this._element.querySelector(this._config.placeImageSelector).src = this._image;
        this._element.querySelector(this._config.placeImageSelector).alt = this._image;

        return this._element;
    }
    
}