import Popup from './Popup.js';
export default class PopupConfirm extends Popup {
    constructor(config, popupSelector) {
    super(config, popupSelector);
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._test();
            this.close();
        })
    }

    setConfirmHandler(func) {
        return this._test = func;
    }
}
