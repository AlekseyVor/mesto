export default class Popup {
    constructor(config, popupSelector) {
        this._config = config;
        this._popup = document.querySelector(popupSelector);
    }

    open() {
        this._popup.classList.add(this._config.popupActiveClass);
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
    }

    close() {
        this._popup.classList.remove(this._config.popupActiveClass);
        document.removeEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
    }

    _handleEscClose(evt) {
        if(evt.key === this._config.ESCAPE_KEY) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.querySelector(this._config.closeButtonSelector).addEventListener('click', () => {
            this.close();
        });
        this._popup.addEventListener('mousedown', (evt) => {
        if(evt.target === this._popup) {
            this.close();
        }
        });

    }
}