import {setEscapeEventListener} from '../scripts/index.js';

export const openPopup = (popup) => { 
    popup.classList.add ('popup_opened');
    document.addEventListener ('keydown', setEscapeEventListener);
}

