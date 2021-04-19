const popup = document.querySelector ('.popup');
const popupButtonOpen = document.querySelector ('.profile__edit-button');
const popupButtonClose = document.querySelector ('.popup__close');
const popupForm = document.querySelector ('.popup__container');
let nameProfile = document.querySelector ('.profile__name');
let jobProfile = document.querySelector ('.profile__job');
let nameInput = document.querySelector ('.popup__input-name');
let jobInput =  document.querySelector ('.popup__input-job');

function formSubmitHandler (event) {
    event.preventDefault(); 
    nameProfile.textContent = (nameInput.value); 
    jobProfile.textContent = (jobInput.value);
    OpenClosePopup();
}

function OpenClosePopup () {
    popup.classList.toggle ('popup_opened');
}

function overlayClosePopup (event) {
if (event.target === event.currentTarget) {
    OpenClosePopup();
}
}

popupButtonOpen.addEventListener ('click', OpenClosePopup);
popupButtonClose.addEventListener ('click', OpenClosePopup);
popup.addEventListener ('click', overlayClosePopup);
popupForm.addEventListener('submit', formSubmitHandler);




