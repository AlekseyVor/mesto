import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor(config, {popupSelector,handleFormSubmit}) {
    super(config, popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll(this._config.inputSelector);
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        this._popup.querySelector(this._config.closeButtonSelector).addEventListener('click', () => {
            this.close();
        })
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this._popup.querySelector(this._config.formSelector).reset();
            this.close();
        })
        this._popup.addEventListener('mousedown', (evt) => {
            if(evt.target === this._popup) {
                this.close();
            }
            });
    }

    close() {
        this._popup.classList.remove(this._config.popupActiveClass);
        document.removeEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
        this._clearInputError();
    }

    _clearInputError() {
        this._popup.querySelectorAll(this._config.inputSelector).forEach((inputElement) => {
            inputElement.classList.remove(this._config.errorInputClass);
        })
        this._popup.querySelectorAll(this._config.errorInputSelector).forEach((errorElement) => {
            errorElement.classList.remove(this._config.errorActiveClass);
        })
        this._popup.querySelector(this._config.formSelector).reset();
    }

}