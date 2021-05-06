const popupProfile = document.querySelector ('#profile');
const popupPlace = document.querySelector ('#newplace');
const popupPhoto = document.querySelector ('#photo');
const popupButtonProfile = document.querySelector ('.profile__edit-button');
const popupButtonPlace = document.querySelector ('.profile__add-button');
const popupButtonPhoto = document.querySelector ('.place__image');
const popupButtonClose = document.querySelectorAll ('.popup__close');
const popupForm = document.querySelector ('.popup__container');
const cardTemplate = document.querySelector ('#cards');
const cardsContainer = document.querySelector ('.places');
let nameProfile = document.querySelector ('.profile__name');
let jobProfile = document.querySelector ('.profile__job');
let nameInput = document.querySelector ('.popup__input_name');
let jobInput =  document.querySelector ('.popup__input_job');
let placeInput = document.querySelector ('.popup__input_place');
let urlInput = document.querySelector ('.popup__input_url');
const photoImg = document.querySelector ('.popup__img');
const photoTitle = document.querySelector ('.popup__title-img');


const initialCards = [
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

function cardHandler (item) {
    const cardElement = cardTemplate.content.querySelector('.place').cloneNode(true);
    cardElement.querySelector('.place__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('place__like_active')
    });
    cardElement.querySelector('.place__delete').addEventListener('click', function (evt) {
        evt.target.closest('.place').remove();
    });
    cardElement.querySelector('.place__image').addEventListener('click', function (evt) {
        photoImg.src = cardElement.querySelector('.place__image').src;
        photoImg.alt = cardElement.querySelector('.place__image').alt;
        photoTitle.textContent = cardElement.querySelector('.place__title').textContent;
        popupPhoto.classList.add ('popup_opened');
    });
    cardElement.querySelector('.place__title').textContent = item.name;
    cardElement.querySelector('.place__image').src = item.link;
    cardElement.querySelector('.place__image').alt = item.name;
    cardsContainer.prepend(cardElement)}

function openPhoto (event) {
    console.log(event.target);
}

initialCards.forEach (cardHandler);

function formSubmitProfile (event) {
    event.preventDefault(); 
    nameProfile.textContent = nameInput.value; 
    jobProfile.textContent = jobInput.value;
    ClosePopup();
}
function formSubmitPlace (event) {
    event.preventDefault();
    const item = [{name: placeInput.value,link: urlInput.value}];
    item.forEach(cardHandler);
    ClosePopup();
    placeInput.value = '';
    urlInput.value = '';
}

function OpenPopup (event) {
    if (event.target === popupButtonProfile) {
        popupProfile.classList.add ('popup_opened');
    }
    if (event.target === popupButtonPlace) {
        popupPlace.classList.add ('popup_opened');
    }
}

function ClosePopup(event) {
    popupPlace.classList.remove ('popup_opened');
    popupProfile.classList.remove ('popup_opened');
    popupPhoto.classList.remove ('popup_opened');
}

popupButtonClose.forEach(function (button) {
button.addEventListener ('click', ClosePopup);
});

popupButtonProfile.addEventListener ('click', OpenPopup);
popupButtonPlace.addEventListener ('click', OpenPopup);
popupProfile.addEventListener ('submit', formSubmitProfile);
popupPlace.addEventListener ('submit', formSubmitPlace);
