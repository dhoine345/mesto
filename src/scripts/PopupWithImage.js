import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__photo');
    this._caption = this._popup.querySelector('.popup__photo-name');
  }
  
   open(link, name) {
    this._image.src = link;
    this._caption.textContent = name;
    this._image.alt = `${name}.`;

    super.open();
  }
}
