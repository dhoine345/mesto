import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.popup__container-form');
  }

  _getInputValues() {

  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListeners('submit', this._handleSubmit)
  }

  close() {
    super.close();
    this._form.reset();
  }
}
