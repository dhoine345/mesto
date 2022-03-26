import '../styles/index.css';

import { editButton, popupFormEdit, nameInput, jobInput, addButton, popupFormAdd, validationConfig, initialCards } from './constants.js';
import { FormValidator } from './FormValidator.js';
import { Card } from './Сard.js';
import { Section } from './Section.js'
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';

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
  const cardElement = createCard(item);
  container.prepend(cardElement);
};

//Добавить карточку из формы
const addNewCard = (data) => {
  const card = createCard({
    name: data['place-name'],
    link: data.link
  });
  section.addItem(card);
  addCardPopup.close();
 };

//Открыть попапы
function openPopupEditProfile () {
  const { name, job } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;
  formEditValidator.resetValidation();
  editProfilePopup.open();
};

function openPopupAddCard() {
  addCardPopup.open();
  formAddValidator.resetValidation();
};

//Сохрание новых данных профиля
const submitEditProfile = (data) => {
  const { name, job } = data;
  userInfo.setUserInfo(name, job);
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

//Отображение информации о пользователе
const userInfo = new UserInfo({profileNameSelector: '.profile__avatar-name', profileJobSelector: '.profile__avatar-job'});
