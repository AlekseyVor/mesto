export const popupProfile = document.querySelector ('#profile');
export const popupPlace = document.querySelector ('#newplace');
export const popupPhoto = document.querySelector ('#photo');
export const popupButtonProfile = document.querySelector ('.profile__edit-button');
export const popupButtonPlace = document.querySelector ('.profile__add-button');
export const popupCloseButtons = document.querySelectorAll ('.popup__close')
export const cardsContainer = document.querySelector ('.places');
export const nameProfile = document.querySelector ('.profile__name');
export const jobProfile = document.querySelector ('.profile__job');
export const photoImg = document.querySelector ('.popup__img');
export const photoTitle = document.querySelector ('.popup__title-img');
export const nameInput = document.querySelector ('.popup__input_name');
export const jobInput =  document.querySelector ('.popup__input_job');
export const placeInput = document.querySelector ('.popup__input_place');
export const urlInput = document.querySelector ('.popup__input_url');
export const popupOverlays = document.querySelectorAll ('.popup__overlay');

export const config = {
    errorActiveClass: 'popup__input-error_active',
    errorInputClass: 'popup__input_invalid',
    inputSelector: '.popup__input',
    submitSelector: '.popup__submit',
}

export const initialCards = [
    {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];
