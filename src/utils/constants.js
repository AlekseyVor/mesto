export const popupButtonProfile = document.querySelector ('.profile__user-edit');
export const popupButtonPlace = document.querySelector ('.profile__place-edit');
export const popupButtonAvatar = document.querySelector ('.profile__avatar');
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
    avatarEditorSelector: '.avatar-editor',
    nameSelector: '.profile__name',
    jobSelector: '.profile__job',
    cardTemplateDefault: '.card-template_type_default',
    cardsContainerSelector: '.places',
    popupPhotoSelector: '#photo',
    popupProfileSelector: '#profile',
    popupPlaceSelector: '#newplace',
    popupAvatarSelector: '#avatar',
    poupDeleteSelector: '#delete',
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
    popupPhotoTitleSelector: '.popup__title-img',
    avatarSelector: '.profile__avatar',
    methodGET: 'GET',
    methodPUT: 'PUT',
    methodDELETE: 'DELETE',
    methodPATCH: 'PATCH',
    methodPOST: 'POST',
    urlLikes: '/cards/likes/',
    urlMe: '/users/me',
    urlCards: '/cards/',
    urlAvatar: '/users/me/avatar',
    token: '4caf9c4d-a302-411a-9ffa-2ef00699d265',
    loadingText: 'Сохранение...'
}
