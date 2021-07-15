import './index.css'
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupConfirm from '../components/PopupConfirm';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api';
import {popupButtonProfile,popupButtonPlace,config,nameInput,jobInput, popupButtonAvatar} from '../utils/constants.js'

function createCard(item, user) {
    const card = new Card(config, config.cardTemplateDefault, item, user,
        () => { 
            if(item.likes.some(i => i._id === user._id)) {
                api.updateLike(config.urlLikes, config.methodDELETE, config.token,item._id)
                .then((res) => {card.updateLike(res)})
                .catch((err) => {console.log(err)});;
            } else {
                api.updateLike(config.urlLikes, config.methodPUT, config.token,item._id)
                .then((res) => {card.updateLike(res)})
                .catch((err) => {console.log(err)});; 
            }},
        () => { popupDelete.setConfirmHandler(() => {
            popupDelete.renderLoading(true);
            api.deleteCard(config.urlCards, config.methodDELETE, config.token, item._id)
            .then(() => { 
                card.deleteCard();
                popupDelete.close();
            })
            .catch((err) => {console.log(err)})
            .finally(() => {
                popupDelete.renderLoading(false);
            })
            })
            popupDelete.open();
    } , (image, title) => {
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
    popupProfile.open();
});

popupButtonPlace.addEventListener ('click',() => {
    formPlace.resetValidation();
    popupPlace.open();
});

popupButtonAvatar.addEventListener ('click',() => {
    formAvatar.resetValidation();
    popupAvatar.open();
})

const formProfile = new FormValidator(config, config.profileEditorSelector);
const formPlace = new FormValidator(config, config.placeEditorSelector);
const formAvatar = new FormValidator(config, config.avatarEditorSelector);
const user = new UserInfo({nameSelector: config.nameSelector, jobSelector: config.jobSelector, avatarSelector: config.avatarSelector});
const cardList = new Section({
    items: [],
    renderer: (item) => {
        cardList.addItem(createCard(item));
    }
}, config.cardsContainerSelector);
export const popupWithImage = new PopupWithImage(config, config.popupPhotoSelector);
const popupProfile = new PopupWithForm(config, {popupSelector: config.popupProfileSelector, handleFormSubmit: (formData) => {
    popupProfile.renderLoading(true);
    api.patchUserInfo(config.urlMe, config.methodPATCH, config.token,formData)
    .then((res) => { 
        user.setUserInfo(res);
        popupProfile.close();
    })
    .catch((err) => {console.log(err)})
    .finally(() => {
        popupProfile.renderLoading(false);
    })
}});
const popupPlace = new PopupWithForm(config, {popupSelector: config.popupPlaceSelector, handleFormSubmit: (item) => {
    popupPlace.renderLoading(true);
    api.postNewCard(config.urlCards, config.methodPOST, config.token, item)
    .then((card) => {
        cardList.addItem(createCard(card, user.getId()));
        popupPlace.close();
        })
    .catch((err) => {console.log(err)})
    .finally(() => {
        popupPlace.renderLoading(false);
    })
}});
const popupAvatar = new PopupWithForm(config, {popupSelector: config.popupAvatarSelector, handleFormSubmit: (formData) => {
    popupAvatar.renderLoading(true);
    api.patchUserAvatar(config.urlAvatar, config.methodPATCH, config.token, formData['url-avatar'])
    .then((res) => { 
        user.setUserAvatar(res);
        popupAvatar.close();
    })
    .catch((err) => {console.log(err)})
    .finally(() => {
        popupAvatar.renderLoading(false);
    })
}});
const popupDelete = new PopupConfirm(config, config.poupDeleteSelector);

const api = new Api(config, {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-25',
    method: '',
    headers: {
    authorization: config.token,
    'Content-Type': 'application/json'
    }
});

formProfile.enableValidation();
formPlace.enableValidation();
formAvatar.enableValidation();
popupProfile.setEventListeners();
popupPlace.setEventListeners();
popupAvatar.setEventListeners();
popupWithImage.setEventListeners();
popupDelete.setEventListeners();
cardList.renderItems();

Promise.all([api.getUserInfo(config.urlMe, config.methodGET, config.token),api.getInitialCards(config.urlCards, config.methodGET, config.token)])
.then(([userData, cards]) => {
user.setUserInfo(userData);
user.setUserAvatar(userData);
user.setId(userData);
cards.forEach(i => {
cardList.addInitialItems(createCard(i, userData))})})
.catch((err) => {console.log(err)});




