export const popupButtonProfile = document.querySelector ('.profile__edit-button');
export const popupButtonPlace = document.querySelector ('.profile__add-button');
export const nameInput = document.querySelector ('.popup__input_name');
export const jobInput =  document.querySelector ('.popup__input_job');

export const config = {
    errorActiveClass: 'popup__input-error_active',
    errorInputClass: 'popup__input_invalid',
    errorInputSelector: '.popup__input-error',
    inputSelector: '.popup__input',
    submitSelector: '.popup__submit',
    profileEditorSelector: '.profile-editor',
    placeEditorSelector: '.place-editor',
    nameSelector: '.profile__name',
    jobSelector: '.profile__job',
    cardTemplateDefault: '.card-template_type_default',
    cardsContainerSelector: '.places',
    popupPhotoSelector: '#photo',
    popupProfileSelector: '#profile',
    popupPlaceSelector: '#newplace',
    cardSelector: '.place',
    likeSelector: '.place__like',
    likeActiveClass: 'place__like_active',
    placeDeleteSelector: '.place__delete',
    placeImageSelector: '.place__image',
    placeTitleSelector: '.place__title',
    popupActiveClass: 'popup_opened',
    ESCAPE_KEY: 'Escape',
    closeButtonSelector: '.popup__close',
    formSelector: '.form',
    popupPhotoImgSelector: '.popup__img',
    popupPhotoTitleSelector: '.popup__title-img'
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
