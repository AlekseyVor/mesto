import './index.css'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {popupButtonProfile,popupButtonPlace,config,initialCards} from '../utils/constants.js'

popupButtonProfile.addEventListener ('click',() => {
    user.inputProfileValue(user.getUserInfo());
    formProfile.toggleButtonState(formProfile._formElement.querySelector(config.submitSelector), Array.from(formProfile._formElement.querySelectorAll(config.inputSelector)));
    popupProfile.open();
});

popupButtonPlace.addEventListener ('click',() => {
    formPlace.toggleButtonState(formPlace._formElement.querySelector(config.submitSelector), Array.from(formPlace._formElement.querySelectorAll(config.inputSelector)));
    popupPlace.open();
});

const formProfile = new FormValidator(config,config.profileEditorSelector);
const formPlace = new FormValidator(config,config.placeEditorSelector);
const user = new UserInfo({nameSelector: config.nameSelector,jobSelector: config.jobSelector});
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card(config, item.name, item.link,config.cardTemplateDefault, (card) => {
            popupWithImage.open(card);
        }).generateCard();
        cardList.addItem(card);
    }
}, config.cardsContainerSelector)
export const popupWithImage = new PopupWithImage(config, config.popupPhotoSelector);
const popupProfile = new PopupWithForm(config, {popupSelector: config.popupProfileSelector,handleFormSubmit: (formData) => {
    user.setUserInfo(formData);
}});
const popupPlace = new PopupWithForm(config, {popupSelector: config.popupPlaceSelector,handleFormSubmit: (formData) => {
    const card = new Card(config, formData.place, formData.url, config.cardTemplateDefault, (card) => {
        popupWithImage.open(card);}).generateCard();
    cardList.addItem(card);
}});

formProfile.enableValidation();
formPlace.enableValidation();
popupProfile.setEventListeners();
popupPlace.setEventListeners();
popupWithImage.setEventListeners();
cardList.renderItems();

