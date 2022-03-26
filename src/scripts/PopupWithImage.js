import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
   open(link, name) {
    const image = this._popup.querySelector('.popup__photo');
    const caption = this._popup.querySelector('.popup__photo-name');

    image.src = link;
    caption.textContent = name;
    image.alt = `${name}.`;

    super.open();
  }
}
