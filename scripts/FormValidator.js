class FormValidator {
    constructor(config, formElement) {
        this._config = config;
        this._formElement = document.querySelector(formElement);
        
    }

    _hideInputError = (inputElement) => {
        const erorrElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        erorrElement.textContent = '';
        erorrElement.classList.remove(this._config.errorActiveClass);
    }
    _showInputError = (inputElement) => {
        const erorrElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        erorrElement.textContent = inputElement.validationMessage;
        erorrElement.classList.add(this._config.errorActiveClass);
    }
    checkInputValidity = (inputElement) => {
        if(inputElement.validity.valid) {
            this._hideInputError(inputElement);
        } else { 
            this._showInputError(inputElement);
        }
    }

    _hasInvalidInput = (inputList) => {
        return inputList.some(inputElement => !inputElement.validity.valid);
        }

    _toggleButtonState = (buttonElement, inputList) => {
        if (this._hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        } else {
        buttonElement.disabled = false;
        }
        }

    _setEventListeners = () => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._config.inputSelector));
        const buttonElement = this._formElement.querySelector(this._config.submitSelector);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input',() => {
                this.checkInputValidity(inputElement);
                this._toggleButtonState(buttonElement, inputList);
            })
            
        })
        this._toggleButtonState(buttonElement, inputList);

    }

    enableValidation = () => {
    // setEventlisteners
    this._setEventListeners();
}
}

export default FormValidator;