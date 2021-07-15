export default class Card {
    constructor(config, cardSelector, cardData, currentUser, handleLikeClick, handleDeleteClick, handleCardClick){
    this._config = config;
    this._cardSelector = cardSelector;
    this._cardData = cardData;
    this._currentUser = currentUser;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
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
        this._element.querySelector(this._config.likeSelector).addEventListener('click', () => {
        this._handleLikeClick();
        });
        this._element.querySelector(this._config.placeDeleteSelector).addEventListener('click', () => {
        this._handleDeleteClick();
        });
        this._element.querySelector(this._config.placeImageSelector).addEventListener('click', () => {
        this._handleCardClick(this._cardData.link, this._cardData.name);
        });
    }

    deleteCard() {
        this._element.remove();
    }

    updateLike(likes) {
        this._element.querySelector('.place__like').classList.toggle(this._config.likeActiveClass);
        this._element.querySelector('.place__likes').textContent = likes.likes.length;
        this._cardData.likes = likes.likes;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._getTemplate();
        
        this._setEventListeners();
        this._element.querySelector(this._config.placeTitleSelector).textContent = this._cardData.name;
        this._element.querySelector(this._config.placeImageSelector).src = this._cardData.link;
        this._element.querySelector(this._config.placeImageSelector).alt = this._cardData.name;
        this._element.querySelector('.place__likes').textContent = this._cardData.likes.length;
        if(this._cardData.likes.some(item => item._id === this._currentUser._id)) {
            this._element.querySelector('.place__like').classList.add(this._config.likeActiveClass);
        }
        if(this._cardData.owner._id === this._currentUser._id) {
        this._element.querySelector('.place__delete').classList.add('place__delete_active')}
        
        return this._element;
    }
    
}