const hideInputError = (formElement, inputElement, config) => {
    const erorrElement = formElement.querySelector(`#${inputElement.id}-error`);
    erorrElement.textContent = ''
    erorrElement.classList.remove(config.errorActiveClass);
    
}

const showInputError = (formElement, inputElement, config) => {
    const erorrElement = formElement.querySelector(`#${inputElement.id}-error`);
    erorrElement.textContent = inputElement.validationMessage;
    erorrElement.classList.add(config.errorActiveClass);
}

const checkInputValidity = (formElement, inputElement) => {
    if(inputElement.validity.valid) {
      // hide
    hideInputError(formElement,inputElement, config);
    } else {
        // show
    showInputError(formElement,inputElement, config);
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some(inputElement => !inputElement.validity.valid);
}

const toggleButtonState = (buttonElement, inputList) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.disabled = true;
        
    } else {
        buttonElement.disabled = false;
    }
}

const setValidationEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitSelector);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(buttonElement,inputList);
        })
    })
    //initialState
    toggleButtonState(buttonElement,inputList);
}

const enableValidation = (config) =>  {
    // find forms
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    // event listeners 
    formList.forEach((formElement) => {
        setValidationEventListeners(formElement, config);
    })
}