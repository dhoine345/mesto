import { FormValidator } from './FormValidator.js';
import { closePopup, openPopup } from './utils.js';
import { Card } from './Сard.js';
import { initialCards } from './cards.js';

//Переменные
const editButton = document.querySelector('.profile__edit-button');
const popupFormEdit = document.querySelector('.popup__container-form_edit');
const nameInput = document.querySelector('.popup__container-form-input_type_name');
const jobInput = document.querySelector('.popup__container-form-input_type_job');
const profileAvatarName = document.querySelector('.profile__avatar-name');
const profileAvatarHobby = document.querySelector('.profile__avatar-job');
const popupEditProfile = document.querySelector('.popup_edit');
const popupAddCard = document.querySelector('.popup_add');
const addButton = document.querySelector('.profile__add-button');
const cardsContainer = document.querySelector('.elements');
const popupFormAdd = document.querySelector('.popup__container-form_add');
const placeInput = document.querySelector('.popup__container-form-input_type_place')
const linkInput = document.querySelector('.popup__container-form-input_type_link')
const popupPhoto = document.querySelector('.popup_photo');
const popupPhotoName = document.querySelector('.popup__photo-name');
const popupPhotoImage = document.querySelector('.popup__photo');
const popups = document.querySelectorAll('.popup');

const validationConfig = {
  formSelector: '.popup__container-form',
  inputSelector: '.popup__container-form-input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__container-form-input_type_error'
};

//Добавление класса валидации
const formEditValidator = new FormValidator(validationConfig, popupFormEdit);
const formAddValidator = new FormValidator(validationConfig, popupFormAdd);

formEditValidator.enableValidation();
formAddValidator.enableValidation();

//Добавить карточки на страницу
function renderCard(item, container) {
  const cards = new Card(item, '#template', clickImage); //Добавление класса карточки
  const CardElement = cards.createCard();
  container.prepend(CardElement);
};

//Добавить карточку из формы
function addNewCard (evt) {
  evt.preventDefault();
  const card = ({
    name: placeInput.value,
    link: linkInput.value
  });
  renderCard(card, cardsContainer);
  closePopup (popupAddCard);
  popupFormAdd.reset();
};

//Открыть попапы
function openPopupEditProfile () {
  openPopup(popupEditProfile);
  nameInput.value = profileAvatarName.textContent;
  jobInput.value = profileAvatarHobby.textContent;
  formEditValidator.resetValidation();
};

function openPopupAddCard() {
  openPopup(popupAddCard);
  formAddValidator.resetValidation();
  popupFormAdd.reset();
};

//Сохрание новых данных профиля
function submitEditProfile (evt) {
  evt.preventDefault();
  profileAvatarName.textContent = nameInput.value;
  profileAvatarHobby.textContent = jobInput.value;
  closePopup (popupEditProfile);
};

//Закрыть по оверлею
function closePopupByButtonAndOverlay () {
    popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__container-form-close-button')) {
          closePopup(popup)
        }
    })
})
};

//Показать попап с картинкой
function clickImage(link, name) {
    openPopup(popupPhoto);
    popupPhotoImage.src = link;
    popupPhotoName.textContent = name;
    popupPhotoImage.alt = `${name}.`;
}

//Обработчики
editButton.addEventListener('click', openPopupEditProfile); //открыть форму редактирования профайла
addButton.addEventListener('click', openPopupAddCard); //открыть форму добавления новой карточки
popupFormEdit.addEventListener('submit', submitEditProfile); //подтвердить ввод новых данных в профайле
popupFormAdd.addEventListener('submit', addNewCard); //добавить новую карточку на страницу

initialCards.forEach(item => {
  renderCard(item, cardsContainer)
});

closePopupByButtonAndOverlay();
