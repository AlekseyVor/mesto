import Popup from './Popup.js';
export default class PopupConfirm extends Popup {
    constructor(config, popupSelector) {
    super(config, popupSelector);
    this._submitButton = this._popup.querySelector(this._config.submitSelector);
    this._initialText = this._submitButton.textContent;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._confirmHandler();
        })
    }

    setConfirmHandler(func) {
        return this._confirmHandler = func;
    }

    renderLoading(isLoading) {
        if(isLoading) {
            this._submitButton.textContent = this._config.loadingText;
        } else {
            this._submitButton.textContent = this._initialText;
        }
    }
}
