import { FormValidator } from './FormValidator.js';
import { Card } from './Сard.js';
import { initialCards } from './cards.js';
import { Section } from './Section.js'
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';

//Переменные
const editButton = document.querySelector('.profile__edit-button');
const popupFormEdit = document.querySelector('.popup__container-form_edit');
const nameInput = document.querySelector('.popup__container-form-input_type_name');
const jobInput = document.querySelector('.popup__container-form-input_type_job');
const profileAvatarName = document.querySelector('.profile__avatar-name');
const profileAvatarHobby = document.querySelector('.profile__avatar-job');
const addButton = document.querySelector('.profile__add-button');
const popupFormAdd = document.querySelector('.popup__container-form_add');
const placeInput = document.querySelector('.popup__container-form-input_type_place')
const linkInput = document.querySelector('.popup__container-form-input_type_link')

const validationConfig = {
  formSelector: '.popup__container-form',
  inputSelector: '.popup__container-form-input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__container-form-input_type_error'
};

//Создание класса секций
const section = new Section({ items: initialCards, renderer: renderCard }, '.elements');
section.renderInitialCards();

//Добавление класса валидации
const formEditValidator = new FormValidator(validationConfig, popupFormEdit);
const formAddValidator = new FormValidator(validationConfig, popupFormAdd);

formEditValidator.enableValidation();
formAddValidator.enableValidation();

//Добавление класса карточки
function createCard(item) {
  const cards = new Card(item, '#template', () => {
    popupImage.open(item.link, item.name);
  });
  return cards.createCard();
}

//Добавить карточки на страницу
function renderCard(item, container) {
  const CardElement = createCard(item);
  container.prepend(CardElement);
};

//Добавить карточку из формы
function addNewCard (evt) {
  evt.preventDefault();
  const card = createCard({
    name: placeInput.value,
    link: linkInput.value
  });

  section.addItem(card)
  addCardPopup.close();
  popupFormAdd.reset();
};

//Открыть попапы
function openPopupEditProfile () {
  //openPopup(popupEditProfile);
  editProfilePopup.open();
  nameInput.value = profileAvatarName.textContent;
  jobInput.value = profileAvatarHobby.textContent;
  formEditValidator.resetValidation();
};

function openPopupAddCard() {
  //openPopup(popupAddCard);
  addCardPopup.open();
  formAddValidator.resetValidation();
  popupFormAdd.reset();
};

//Сохрание новых данных профиля
function submitEditProfile (evt) {
  evt.preventDefault();
  profileAvatarName.textContent = nameInput.value;
  profileAvatarHobby.textContent = jobInput.value;
  editProfilePopup.close();
};

editButton.addEventListener('click', openPopupEditProfile); //открыть форму редактирования профайла
addButton.addEventListener('click', openPopupAddCard); //открыть форму добавления новой карточки

//Создание Popup из класса
const popupImage = new PopupWithImage('.popup_photo');
const addCardPopup = new PopupWithForm('.popup_add', addNewCard);
const editProfilePopup = new PopupWithForm('.popup_edit', submitEditProfile);
popupImage.setEventListeners();
addCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
