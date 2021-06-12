export default class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = document.querySelector(formElement);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector))
        this._buttonElement = this._formElement.querySelector(this._config.submitSelector);
        
    }

    resetValidation() {
        this._formElement.querySelectorAll(this._config.inputSelector).forEach((inputElement) => {
        inputElement.classList.remove(this._config.errorInputClass);
        })
        this._formElement.querySelectorAll(this._config.errorInputSelector).forEach((errorElement) => {
        errorElement.classList.remove(this._config.errorActiveClass);
        })
    }

    _hideInputError = (inputElement) => {
        const erorrElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        erorrElement.textContent = '';
        inputElement.classList.remove(this._config.errorInputClass);
        erorrElement.classList.remove(this._config.errorActiveClass);
    }
    _showInputError = (inputElement) => {
        const erorrElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        erorrElement.textContent = inputElement.validationMessage;
        inputElement.classList.add(this._config.errorInputClass);
        erorrElement.classList.add(this._config.errorActiveClass);
    }
    _checkInputValidity = (inputElement) => {
        if(inputElement.validity.valid) {
            this._hideInputError(inputElement);
        } else { 
            this._showInputError(inputElement);
        }
    }

    _hasInvalidInput = (inputList) => {
        return inputList.some(inputElement => !inputElement.validity.valid);
        }

    toggleButtonState = (buttonElement, inputList) => {
        if (this._hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        } else {
        buttonElement.disabled = false;
        }
        }

    _setEventListeners = () => {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input',() => {
                this._checkInputValidity(inputElement);
                this.toggleButtonState(this._buttonElement, this._inputList);
            })
        })
        this.toggleButtonState(this._buttonElement, this._inputList);
    }

    enableValidation = () => {
    // setEventlisteners
    this._setEventListeners();
}
}