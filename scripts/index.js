import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {config, initialCards} from '../utils/constants.js'


const popupProfile = document.querySelector ('#profile');
const popupPlace = document.querySelector ('#newplace');
const popupPhoto = document.querySelector ('#photo');
const popupButtonProfile = document.querySelector ('.profile__edit-button');
const popupButtonPlace = document.querySelector ('.profile__add-button');
const popupCloseButtons = document.querySelectorAll ('.popup__close')
const cardsContainer = document.querySelector ('.places');
const nameProfile = document.querySelector ('.profile__name');
const jobProfile = document.querySelector ('.profile__job');
const photoImg = document.querySelector ('.popup__img');
const photoTitle = document.querySelector ('.popup__title-img');
const nameInput = document.querySelector ('.popup__input_name');
const jobInput =  document.querySelector ('.popup__input_job');
const placeInput = document.querySelector ('.popup__input_place');
const urlInput = document.querySelector ('.popup__input_url');
const popupOverlays = document.querySelectorAll ('.popup__overlay');

const addCard = (container, cardElement) => {
    container.prepend(cardElement);
}

initialCards.forEach((item) => {
    const card = new Card(item.name, item.link,'.card-template_type_default').generateCard();
    addCard(cardsContainer, card);
});

const submitProfileForm = (evt) => {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value; 
    jobProfile.textContent = jobInput.value;
    closePopup(popupProfile);
}

const submitPlaceForm = (evt) => {
    evt.preventDefault();
    const card = new Card(placeInput.value,urlInput.value,'.card-template_type_default').generateCard();
    addCard(cardsContainer, card);
    closePopup(popupPlace);
    evt.target.reset();
}

const openPopup = (popup) => { 
    popup.classList.add ('popup_opened');
    document.addEventListener ('keydown', setEscapeEventListener);
}

const closePopup = (popup) => {
    popup.classList.remove ('popup_opened');
    document.removeEventListener ('keydown', setEscapeEventListener);
}

const inputPlaceValue = () => {
    placeInput.dispatchEvent(new Event('input'));
    urlInput.dispatchEvent(new Event('input'));
}

const setEscapeEventListener = (evt) => {
    const openedPopup = document.querySelector ('.popup_opened');
    if(evt.key === 'Escape') {
        closePopup(openedPopup);
    }
}

const inputProfileValue = () => {
    
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    nameInput.dispatchEvent(new Event('input'));
    jobInput.dispatchEvent(new Event('input'));
    
}


popupCloseButtons.forEach(function (button) { 
    button.addEventListener ('click', (evt) => {
        const closeButton = evt.target;
        closePopup(closeButton.closest('.popup__overlay'));
    }); 
    });

popupOverlays.forEach(function (overlay) {
    overlay.addEventListener ('mousedown',(evt) => {
        if(evt.target === overlay) {
            closePopup(overlay);
        }
    })
});

popupButtonProfile.addEventListener ('click',() => {
    inputProfileValue();
    openPopup(popupProfile);
});

popupButtonPlace.addEventListener ('click',() => {
    inputPlaceValue();
    openPopup(popupPlace);
});

popupProfile.addEventListener ('submit', submitProfileForm);
popupPlace.addEventListener ('submit', submitPlaceForm);

const formProfile = new FormValidator(config,'.profile-editor');
const formPlace = new FormValidator(config,'.place-editor');
formProfile.enableValidation();
formPlace.enableValidation();

export {openPopup,photoImg,photoTitle,popupPhoto};
