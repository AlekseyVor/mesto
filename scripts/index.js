import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {popupProfile,popupPlace,popupButtonProfile,popupButtonPlace,popupCloseButtons,cardsContainer,nameProfile,jobProfile,nameInput,jobInput,placeInput,urlInput,popupOverlays,config,initialCards} from '../utils/constants.js'
import {openPopup} from '../utils/utils.js';

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

const closePopup = (popup) => {
    popup.classList.remove ('popup_opened');
    clearInput(popup);
    document.removeEventListener ('keydown', setEscapeEventListener);
}

const clearInput = (popup) => {
    popup.querySelectorAll(config.inputSelector).forEach((inputElement) => {
        inputElement.classList.remove(config.errorInputClass);
        inputElement.value = '';
    });
    popup.querySelectorAll('.popup__input-error').forEach((errorElement) => {
        errorElement.classList.remove(config.errorActiveClass);
    });
}



export const setEscapeEventListener = (evt) => {
    const openedPopup = document.querySelector('.popup_opened');
    if(evt.key === 'Escape') {
        closePopup(openedPopup);
    }
}

const inputProfileValue = () => {
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent; 
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
    formProfile.toggleButtonState(formProfile._formElement.querySelector(config.submitSelector), Array.from(formProfile._formElement.querySelectorAll(config.inputSelector)));
    openPopup(popupProfile);
});

popupButtonPlace.addEventListener ('click',() => {
    formPlace.toggleButtonState(formPlace._formElement.querySelector(config.submitSelector), Array.from(formPlace._formElement.querySelectorAll(config.inputSelector)));
    openPopup(popupPlace);
});

popupProfile.addEventListener ('submit', submitProfileForm);
popupPlace.addEventListener ('submit', submitPlaceForm);

const formProfile = new FormValidator(config,'.profile-editor');
const formPlace = new FormValidator(config,'.place-editor');
formProfile.enableValidation();
formPlace.enableValidation();
