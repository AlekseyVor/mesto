const popupProfile = document.querySelector ('#profile');
const popupPlace = document.querySelector ('#newplace');
const popupPhoto = document.querySelector ('#photo');
const popupButtonProfile = document.querySelector ('.profile__edit-button');
const popupButtonPlace = document.querySelector ('.profile__add-button');
const popupButtonPhoto = document.querySelector ('.place__image');
const popupForms = document.querySelector ('.popup');
const cardTemplate = document.querySelector ('#cards');
const cardsContainer = document.querySelector ('.places');
const nameProfile = document.querySelector ('.profile__name');
const jobProfile = document.querySelector ('.profile__job');
const photoImg = document.querySelector ('.popup__img');
const photoTitle = document.querySelector ('.popup__title-img');
let nameInput = document.querySelector ('.popup__input_name');
let jobInput =  document.querySelector ('.popup__input_job');
let placeInput = document.querySelector ('.popup__input_place');
let urlInput = document.querySelector ('.popup__input_url');

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
    cardElement.querySelector('.place__title').textContent = item;
    cardElement.querySelector('.place__image').src = link;
    cardElement.querySelector('.place__image').alt = item;
    cardElement.querySelector('.place__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('place__like_active')
        });
    cardElement.querySelector('.place__delete').addEventListener('click', function (evt) {
        evt.target.closest('.place').remove()
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
}
function closePopup(popup) {
    popup.classList.remove ('popup_opened');
}


function popupFotoPaste (evt) {
    const foto = evt.target;
    photoImg.src = foto.src;
    photoImg.alt = foto.alt;
    photoTitle.textContent = foto.alt;
}

popupButtonProfile.addEventListener ('click', function () {
    openPopup(popupProfile);
});

popupButtonPlace.addEventListener ('click', function () {
    openPopup(popupPlace);
});

cardsContainer.addEventListener ('click', function (evt) {
    const popupButtonPhoto = document.querySelector ('.place__image');
    if (evt.target.classList.value === popupButtonPhoto.classList.value) {
        popupFotoPaste(evt);
        openPopup(popupPhoto);
    }
});

popupForms.addEventListener ('click', function(evt){
    const popupButtonClose = evt.target.parentElement.parentElement;
    if (popupButtonClose === popupProfile) {
        closePopup(popupProfile);
    };
    if (popupButtonClose === popupPlace) {
        closePopup(popupPlace);
    };
    if (popupButtonClose === popupPhoto) {
        closePopup(popupPhoto);
    };
})

popupProfile.addEventListener ('submit', formSubmitProfile);
popupPlace.addEventListener ('submit', formSubmitPlace);
