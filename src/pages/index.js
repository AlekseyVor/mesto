import './index.css'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {popupButtonProfile,popupButtonPlace,config,initialCards,nameInput,jobInput} from '../utils/constants.js'

function createCard(item) {
    const card = new Card(config, item.name, item.link, config.cardTemplateDefault, (image, title) => {
        popupWithImage.open(image, title);
    })
    return card.generateCard();
}

function inputProfileValue(userData) {
    nameInput.value = userData.username;
    jobInput.value = userData.userjob; 
}


popupButtonProfile.addEventListener ('click',() => {
    inputProfileValue(user.getUserInfo());
    formProfile.resetValidation();
    formProfile.toggleButtonState();
    popupProfile.open();
});

popupButtonPlace.addEventListener ('click',() => {
    formPlace.resetValidation();
    formPlace.toggleButtonState();
    popupPlace.open();
});

const formProfile = new FormValidator(config,config.profileEditorSelector);
const formPlace = new FormValidator(config,config.placeEditorSelector);
const user = new UserInfo({nameSelector: config.nameSelector,jobSelector: config.jobSelector});
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        cardList.addItem(createCard(item));
    }
}, config.cardsContainerSelector)
export const popupWithImage = new PopupWithImage(config, config.popupPhotoSelector);
const popupProfile = new PopupWithForm(config, {popupSelector: config.popupProfileSelector,handleFormSubmit: (formData) => {
    user.setUserInfo(formData);
}});
const popupPlace = new PopupWithForm(config, {popupSelector: config.popupPlaceSelector,handleFormSubmit: (item) => {
    cardList.addItem(createCard(item));
}});

formProfile.enableValidation();
formPlace.enableValidation();
popupProfile.setEventListeners();
popupPlace.setEventListeners();
popupWithImage.setEventListeners();
cardList.renderItems();