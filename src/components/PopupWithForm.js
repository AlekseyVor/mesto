import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor(config, {popupSelector, handleFormSubmit}) {
    super(config, popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll(this._config.inputSelector);
    this._form = this._popup.querySelector(this._config.formSelector);
    this._submitButton = this._form.querySelector(this._config.submitSelector);
    this._initialText = this._submitButton.textContent;
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.id] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        })
    }

    close() {
        super.close();
        this._form.reset();
    }

    renderLoading(isLoading) {
        if(isLoading) {
            this._submitButton.textContent = this._config.loadingText;
        } else {
            this._submitButton.textContent = this._initialText;
        }
    }

}