//Переменные
const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelectorAll('.popup');
const closeButton = document.querySelectorAll('.popup__container-form-close-button');
const popupFormEdit = document.querySelector('.popup__container-form_edit');
const nameInput = document.querySelector('.popup__container-form-input_type_name');
const jobInput = document.querySelector('.popup__container-form-input_type_job');
const profileAvatarName = document.querySelector('.profile__avatar-name');
const profileAvatarHobby = document.querySelector('.profile__avatar-job');
const popupEditProfile = document.querySelector('.popup_edit');
const popupAddCard = document.querySelector('.popup_add');
const addButton = document.querySelector('.profile__add-button');
const cardTemplate = document.querySelector('.element-template').content;
const cardsContainer = document.querySelector('.elements');
const popupFormAdd = document.querySelector('.popup__container-form_add');
const placeInput = document.querySelector('.popup__container-form-input_type_place')
const linkInput = document.querySelector('.popup__container-form-input_type_link')
const cardPhoto = document.querySelector('.element__place-photo');
const popupPhoto = document.querySelector('.popup_photo');
const popupPhotoName = document.querySelector('.popup__photo-name')
const popupPhotoImage = document.querySelector('.popup__photo')


//Функции

function renderinitialCards (initialCards) {
  const card = cardTemplate.querySelector('.element').cloneNode(true);
  const cardText = card.querySelector('.element__place-name');
  const cardImage = card.querySelector('.element__place-photo');
  const cardLike = card.querySelector('.element__like');
  const carDelete = card.querySelector('.element__delete');
  cardText.textContent = initialCards.name;
  cardImage.src = initialCards.link;
  cardImage.alt = `${initialCards.name}.`;
  carDelete.addEventListener('click', deleteCard);
  cardLike.addEventListener('click', likeCard);
  cardImage.addEventListener('click', function() {
    openPopup(popupPhoto);
    popupPhotoImage.src = initialCards.link;
    popupPhotoName.textContent = initialCards.name;
    popupPhotoImage.alt = `${initialCards.name}.`;
  });
  cardsContainer.prepend(card);
};

function likeCard(e) {
  e.target.classList.toggle('element__like_active');
};

function deleteCard(e) {
  e.target.closest('.element').remove();
};

function addNewCard (evt) {
  evt.preventDefault();
  renderinitialCards ({
    name: placeInput.value,
    link: linkInput.value
  });
  removePopup ();
};

function openPopup (popup) {
  popup.classList.add('popup_opened');
};

function openPopupEditProfile () {
  openPopup(popupEditProfile);
  nameInput.value = profileAvatarName.textContent;
  jobInput.value = profileAvatarHobby.textContent;
};

function openPopupAddCard() {
  openPopup(popupAddCard);
  placeInput.value = '';
  linkInput.value = '';
};

function removePopup () {
  popup.forEach(function (item) {item.classList.remove('popup_opened');});
};

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileAvatarName.textContent = nameInput.value;
  profileAvatarHobby.textContent = jobInput.value;
  removePopup ();
};

//Обработчики
editButton.addEventListener('click', openPopupEditProfile); //открыть форму редактирования профайла
addButton.addEventListener('click', openPopupAddCard); //открыть форму добавления новой карточки
closeButton.forEach(function (item) {item.addEventListener('click', removePopup)}); //закрыть форму редактирования профайла
popupFormEdit.addEventListener('submit', formSubmitHandler); //подтвердить ввод новых данных в профайле
popupFormAdd.addEventListener('submit', addNewCard); //добавить новую карточку на страницу


initialCards.forEach(renderinitialCards);


