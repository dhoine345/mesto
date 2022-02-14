//Показать ошибку
const showInputError = (object, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(object.inputErrorClass);
  errorElement.textContent = errorMessage;
};

//Скрыть ошибку
const hideInputError = (object, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(object.inputErrorClass);
  errorElement.textContent = '';
};

//Проверка инпутов на валидность
const checkInputValidity = (object, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(object, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(object, formElement, inputElement);
  }
};

//Добавление обработчико
const setEventListeners = (object, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
  const buttonElement = formElement.querySelector(object.submitButtonSelector);
  toggleButtonState (object, inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity (object, formElement, inputElement);
      toggleButtonState (object, inputList, buttonElement);
    });
  });
};

//Поверка формы на валидность
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//Переключение кнопки на активное/неактивное состояние
const toggleButtonState = (object, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(object.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(object.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', false);
  }
};

//Запускает валидацию
const enableValidation = (object) => {
  const formList = Array.from(document.querySelectorAll(object.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(object, formElement);
  });
};

enableValidation ({
  formSelector: '.popup__container-form',
  inputSelector: '.popup__container-form-input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__container-form-input_type_error', //подчеркивает инпут красным
  errorClass: 'popup__error_visible'
});
