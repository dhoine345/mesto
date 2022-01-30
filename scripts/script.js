//Переменные
const popup = document.querySelectorAll('.popup');
const editButton = document.querySelector('.profile__edit-button');
const popupEditProfile = document.querySelector('.popup_edit');
const popupAddCard = document.querySelector('.popup_add');
const closeButton = document.querySelectorAll('.popup__container-form-close-button');
//const popupForm = document.querySelectorAll('.popup__container-form');
const popupFormEdit = document.querySelector('.edit');
const popupFormAdd = document.querySelector('.add');
const nameInput = document.querySelector('.popup__container-form-input_type_name');
const jobInput = document.querySelector('.popup__container-form-input_type_job');
const profileAvatarName = document.querySelector('.profile__avatar-name');
const profileAvatarHobby = document.querySelector('.profile__avatar-job');
const cardsContainer = document.querySelector('.elements');
const cardAddButton = document.querySelector('.profile__add-button');
const placeInput = document.querySelector('.popup__container-form-input_type_place')
const linkInput = document.querySelector('.popup__container-form-input_type_link')
const cardTemplate = document.querySelector('.element-template').content;
const deleteCardButton = document.querySelectorAll('.element__delete')

//Функции
/*
deleteCardButton.forEach(function(item) {addEventListener('click', deleteCard)});*/

function openPopup (popup) {
  if (event.target === editButton) {
    popupEditProfile.classList.add('popup_opened');
    nameInput.value = profileAvatarName.textContent;
    jobInput.value = profileAvatarHobby.textContent;
  }
  else if (event.target === cardAddButton) {
    popupAddCard.classList.add('popup_opened');
  }
};

function removePopup () {
  popup.forEach(function (item) {item.classList.remove('popup_opened');})
};

function submitEditProfileForm (evt) {
  evt.preventDefault();
  profileAvatarName.textContent = nameInput.value;
  profileAvatarHobby.textContent = jobInput.value;
  removePopup ();
};

function addCard (evt) {
  evt.preventDefault();
  initialCards.unshift({name: placeInput.value, link: linkInput.value});
  cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__place-name').textContent = initialCards[0].name;
  cardElement.querySelector('.element__place-photo').setAttribute('src', initialCards[0].link);
  cardsContainer.prepend(cardElement);
  removePopup ();
};

function deleteCard() {
  const card = document.querySelector()
}

function addCardFromArray () {
  initialCards.forEach(function(element) {
    cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    cardElement.querySelector('.element__place-name').textContent = element.name;
    cardElement.querySelector('.element__place-photo').setAttribute('src', element.link);
    cardsContainer.append(cardElement);
  });
};

addCardFromArray ();

//События
editButton.addEventListener('click', openPopup); //открыть форму редактирования профайла
cardAddButton.addEventListener('click', openPopup); //открыть форму добавления карточки
closeButton.forEach(function (item) {item.addEventListener('click', removePopup)}); //закрыть popup
popupFormEdit.addEventListener('submit', submitEditProfileForm); //подтвердить ввод новых данных в профайле
popupFormAdd.addEventListener('submit', addCard); //добавить новую карточку на страницу




/*document.querySelector('.popup').addEventListener('click', function(evt) {
  evt.target.classList.toggle('song__like_active');
})*/


/*for (let i = 0; i < elementLike.length; i += 1) {
 elementLike[i].addEventListener('click', function() {
 elementLike[i].classList.add('element__like_active');
 });
};*/
/*let elementLike = document.querySelectorAll('.element__like');*/

/*/*function openPopupAddCard () {
  openPopup (popupAddCard);
};

function openPopupEditProfile () {
  openPopup (popupEditProfile);
  nameInput.value = profileAvatarName.textContent;
  jobInput.value = profileAvatarHobby.textContent;
};*/


/*function aaa () {
  initialCards.unshift({name: 'ghbdtn', link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'})
};*/
