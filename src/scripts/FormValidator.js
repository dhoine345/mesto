export class FormValidator {
  constructor (settings, form) {
    this._form = form
    this._settings = settings
    this._inputList = Array.from(this._form.querySelectorAll(this._settings.inputSelector))
    this._buttonElement = this._form.querySelector(this._settings.submitButtonSelector)
  }

  //показать и скрыть ошибки
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = errorMessage;
  };

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = '';
  };

  //проверка поля на валидность
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  //переключение состяния кнопки сабмита
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled', false);
    }
  };

  //сбросить валидацию
  resetValidation = () => {
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement)
    });
  }

  //добавить слушателей
  _setEventListeners() {
    this._toggleButtonState ();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity (inputElement);
        this._toggleButtonState ();
      });
    });
  };

  //запустить валидацию
  enableValidation() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      });
      this._setEventListeners();
  };
};
