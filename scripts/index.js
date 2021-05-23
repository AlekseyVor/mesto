const popupProfile = document.querySelector ('#profile');
const popupPlace = document.querySelector ('#newplace');
const popupPhoto = document.querySelector ('#photo');
const popupButtonProfile = document.querySelector ('.profile__edit-button');
const popupButtonPlace = document.querySelector ('.profile__add-button');
const popupButtonPhoto = document.querySelector ('.place__image');
const popupCloseButtons = document.querySelectorAll ('.popup__close')
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
const popupOverlays = document.querySelectorAll ('.popup__overlay');

const createCard = (item, link) => {
    const cardElement = cardTemplate.content.querySelector('.place').cloneNode(true);
    const placeTitle = cardElement.querySelector('.place__title');
    const placeImage = cardElement.querySelector('.place__image');
    placeTitle.textContent = item;
    placeImage.src = link;
    placeImage.alt = item;
    setCardEventListeners(cardElement, item, link);
    return cardElement;
}

const setCardEventListeners = (cardElement, item, link) => {
    cardElement.querySelector('.place__like').addEventListener('click', (evt) => {
        evt.target.classList.toggle('place__like_active');
        });
    cardElement.querySelector('.place__delete').addEventListener('click', (evt) => {
        evt.target.closest('.place').remove();
        });
    cardElement.querySelector('.place__image').addEventListener('click', () => {
        pastePopupFoto(item, link);
        openPopup(popupPhoto);
        });
}

const addCard = (container, cardElement) => {
    container.prepend(cardElement);
}
initialCards.forEach((item) => {
    addCard(cardsContainer,createCard(item.name,item.link));
});

const submitProfileForm = (evt) => {
    evt.preventDefault(); 
    nameProfile.textContent = nameInput.value; 
    jobProfile.textContent = jobInput.value;
    closePopup(popupProfile);
}

const submitPlaceForm = (evt) => {
    evt.preventDefault();
    addCard(cardsContainer,createCard(placeInput.value,urlInput.value));
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


const pastePopupFoto = (item, link) => {
    photoImg.src = link;
    photoImg.alt = item;
    photoTitle.textContent = item;
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

const config = {
    errorActiveClass: 'popup__input-error_active',
    inputSelector: '.popup__input',
    submitSelector: '.popup__submit',
    formSelector: '.form'
}

enableValidation(config);
