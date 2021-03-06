export default class Section {
    constructor({items,renderer}, containerSelector) {
        this._itemArray = items;
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    renderItems() {
        this._itemArray.forEach(item => {
            this._renderer(item);
    })}
    
    addInitialItems(element) {
        this._container.append(element);
    }

    addItem(element) {
        this._container.prepend(element);
    }

}