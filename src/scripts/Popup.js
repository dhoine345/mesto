export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
    this._handleEscClose = this._handleEscClose.bind(this)
    this._submitButton = this._popup.querySelector('.popup__submit-button');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key == 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    const closeButton = this._popup.querySelector('.popup__container-form-close-button')

     this._popup.addEventListener('click', (e) => {
      if (!e.target.closest('.popup__container') || e.target === closeButton) {
        this.close()
      }
    })
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = 'Сохранение...';
    } else {
      this._submitButton.textContent = this._initButtonText;
    }
  }
}
