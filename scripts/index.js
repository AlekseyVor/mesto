const popupProfile = document.querySelector ('#profile');
const popupPlace = document.querySelector ('#newplace');
const popupPhoto = document.querySelector ('#photo');
const popupButtonProfile = document.querySelector ('.profile__edit-button');
const popupButtonPlace = document.querySelector ('.profile__add-button');
const popupButtonPhoto = document.querySelector ('.place__image');
const popupButtonClose = document.querySelectorAll ('.popup__close')
const cardTemplate = document.querySelector ('#cards');
const cardsContainer = document.querySelector ('.places');
const nameProfile = document.querySelector ('.profile__name');
const jobProfile = document.querySelector ('.profile__job');
const photoImg = document.querySelector ('.popup__img');
const photoTitle = document.querySelector ('.popup__title-img');
const nameInput = document.querySelector ('.popup__input_name');
const jobInput =  document.querySelector ('.popup__input_job');
const placeInput = document.querySelector ('.popup__input_place');
const urlInput = document.querySelector ('.popup__input_url');
const popupOverlay = document.querySelectorAll ('.popup__overlay');

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

function createCard (item, link) {
    const cardElement = cardTemplate.content.querySelector('.place').cloneNode(true);
    const placeTitle = cardElement.querySelector('.place__title');
    const placeImage = cardElement.querySelector('.place__image');
    placeTitle.textContent = item;
    placeImage.src = link;
    placeImage.alt = item;

    cardElement.querySelector('.place__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('place__like_active');
        });
    cardElement.querySelector('.place__delete').addEventListener('click', function (evt) {
        evt.target.closest('.place').remove();
        });
    cardElement.querySelector('.place__image').addEventListener('click', function (evt) {
        popupFotoPaste(evt);
        openPopup(popupPhoto);
        });
    return cardElement;
};

function addCard (container, cardElement) {
    container.prepend(cardElement);
}
initialCards.forEach(function (item) {
    addCard(cardsContainer,createCard(item.name,item.link));
});

function formSubmitProfile (evt) {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value; 
    jobProfile.textContent = jobInput.value;
    closePopup(popupProfile);
}
function formSubmitPlace (evt) {
    evt.preventDefault();
    addCard(cardsContainer,createCard(placeInput.value,urlInput.value));
    evt.target.reset();
    closePopup(popupPlace);
}

function openPopup (popup) { 
    popup.classList.add ('popup_opened');
    document.addEventListener ('keydown', escapeEventListener);
}

function closePopup(popup) {
    popup.classList.remove ('popup_opened');
    document.removeEventListener ('keydown', escapeEventListener);
}


function popupFotoPaste (evt) {
    const foto = evt.target;
    photoImg.src = foto.src;
    photoImg.alt = foto.alt;
    photoTitle.textContent = foto.alt;
}

function inputValue () {
    placeInput.dispatchEvent(new Event('input'));
    urlInput.dispatchEvent(new Event('input'));
}

function escapeEventListener (evt) {
    const openedPopup = document.querySelector ('.popup_opened');
    if(evt.key === 'Escape') {
        closePopup(openedPopup);
    }
}

popupButtonClose.forEach(function (button) { 
    button.addEventListener ('click', function close (evt) {
        const closeButton = evt.target;
        closePopup(closeButton.closest('.popup__overlay'));
    }); 
    });

popupOverlay.forEach(function (overlay) {
    overlay.addEventListener ('mousedown', function close (evt) {
        if(evt.target === overlay) {
            closePopup(overlay);
        }
    })
});

popupButtonProfile.addEventListener ('click', function () {
    openPopup(popupProfile);
});

popupButtonPlace.addEventListener ('click', function () {
    inputValue();
    openPopup(popupPlace);
});

popupProfile.addEventListener ('submit', formSubmitProfile);
popupPlace.addEventListener ('submit', formSubmitPlace);

const config = {
    errorActiveClass: 'popup__input-error_active',
    inputSelector: '.popup__input',
    submitSelector: '.popup__submit',
    formSelector: '.form'
}

enableValidation(config);
