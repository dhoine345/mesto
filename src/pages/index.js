import './index.css';

import { editButton, popupFormEdit, nameInput, jobInput, addButton, popupFormAdd, validationConfig, avatarEditButton, popupFormAvatar } from '../scripts/constants.js';
import { FormValidator } from '../scripts/FormValidator.js';
import { Card } from '../scripts/Сard.js';
import { Section } from '../scripts/Section.js'
import { PopupWithImage } from '../scripts/PopupWithImage.js';
import { PopupWithForm } from '../scripts/PopupWithForm.js';
import { UserInfo } from '../scripts/UserInfo.js';
import { api } from '../scripts/api.js';

let userId

  const forNewCArd = data => {
    return {
      name: data.name,
      link: data.link,
      likes: data.likes,
      id: data._id,
      userId: userId,
      ownerId: data.owner._id
    }
  }

  Promise.all([api.getProfile(), api.getInitialCards()])
  .then(responseList => {
    const [data, cardList] = responseList
    userInfo.setUserInfo(data.name, data.about)
    userInfo.setUserAvatar(data.avatar)
    userId = data._id
    cardList.reverse().forEach(data => {
      const card = createCard(forNewCArd(data))
      section.addItem(card)
    })
  })
  .catch(console.log)

//Добавление класса валидации
const formEditValidator = new FormValidator(validationConfig, popupFormEdit);
const formAddValidator = new FormValidator(validationConfig, popupFormAdd);
const formAvatarValidator = new FormValidator(validationConfig, popupFormAvatar);

formEditValidator.enableValidation();
formAddValidator.enableValidation();
formAvatarValidator.enableValidation();

//Сохрание новых данных профиля
const submitEditProfile = (data) => {
  const { name, job } = data;
  editProfilePopup.renderLoading(true);
  api.editProfile(name, job)
    .then((res) => {
      userInfo.setUserInfo(res.name, res.about);
      editProfilePopup.close();
    })
};

//Добавить карточку из формы
const addNewCard = (data) => {
  addCardPopup.renderLoading(true);
  api.addCard(data['place-name'], data.link)
    .then((res) => {
      const card = createCard(forNewCArd(res));
      section.addItem(card);
      addCardPopup.close();
    })
};

//Добавление класса карточки
function createCard(item) {
  const cards = new Card(
    item,
    '#template',
    () => {
    popupImage.open(item.link, item.name);
    },
    (id) => {
      deletePopup.open();
      deletePopup.changeSubmitHandler(() => {
        api.deleteCard(id)
          .then(() => {
            cards.deleteCard();
            deletePopup.close();
          })
      });
    },
    (id) => {
      if(cards.isLiked()) {
        api.deleteLike(id)
          .then(res => {
          cards.setLikes(res.likes)
        })
      } else {
        api.setLike(id)
        .then(res => {
          cards.setLikes(res.likes)
        })
      }
    }
  );
  return cards.createCard();
}

//Добавить карточки на страницу
function renderCard(item, container) {
  const cardElement = createCard(item);
  container.prepend(cardElement);
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

function openPopupAvatar() {
  editAvatarPopup.open();
  formAddValidator.resetValidation();
};

//Сохрание нового аватара
const submitEditAvatar = (data) => {
  editAvatarPopup.renderLoading(true);
    const link = data.avatar;
    api.editAvatar(link)
      .then(res => {
        userInfo.setUserAvatar(res.avatar);
        editAvatarPopup.close();
      })
};

editButton.addEventListener('click', openPopupEditProfile); //открыть форму редактирования профайла
addButton.addEventListener('click', openPopupAddCard); //открыть форму добавления новой карточки
avatarEditButton.addEventListener('click', openPopupAvatar); //открыть форму редактирования аватара

//Создание класса секций
const section = new Section({ items: [], renderer: renderCard }, '.elements');

//Создание Popup из класса
const popupImage = new PopupWithImage('.popup_photo');
const addCardPopup = new PopupWithForm('.popup_add', addNewCard);
const editProfilePopup = new PopupWithForm('.popup_edit', submitEditProfile);
const deletePopup = new PopupWithForm('.popup_delete-card');
const editAvatarPopup = new PopupWithForm('.popup_edit-avatar', submitEditAvatar);
popupImage.setEventListeners();
addCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
deletePopup.setEventListeners();
editAvatarPopup.setEventListeners();

section.renderInitialCards();

//Отображение информации о пользователе
const userInfo = new UserInfo({profileNameSelector: '.profile__avatar-name', profileJobSelector: '.profile__avatar-job', profileAvatarSelector: '.profile__avatar'});
