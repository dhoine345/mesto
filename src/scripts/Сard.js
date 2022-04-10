//Создание класса карточки
export class Card {
  constructor(data, cardTemplateSelector, clickImage, removeCard, handleLikeClick) {
    /*this._cardTemplate = cardTemplateSelector;
    this._data = data;
    this._clickImage = clickImage;
    this._removeCard = removeCard;
    this._handleLikeClick = handleLikeClick;*/

    this._text = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;

    this._cardTemplate = cardTemplateSelector;
    this._clickImage = clickImage;
    this._removeCard = removeCard;
    this._handleLikeClick = handleLikeClick;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardTemplate)
      .content
      .querySelector('.element')
      .cloneNode(true)
  }

  //Установить слушателей
  _setEventListeners() {
    this._carDelete.addEventListener('click', () => {this._removeCard(this._id)});
    this._cardLike.addEventListener('click', () => {this._handleLikeClick(this._id)});
    this._cardImage.addEventListener('click', () => this._clickImage(this._link, this._text));
  }

  isLiked() {
    const userHasLikedCard = this._likes.find(user => user._id === this._userId)
    return userHasLikedCard
  }

  deleteCard = () => {
    this._card.remove();
    this._card = null;
  };

 setLikes(newLikes) {
    this._likes = newLikes
    if (this._likes.length === 0) {
      this._likeCounter.textContent = ''
    } else {
    this._likeCounter.textContent = this._likes.length;
    }

    if(this.isLiked()) {
      this._likeCard();
    } else {
      this._removeLikeCard();
    }
  };

  _likeCard = () => {
    this._cardLike.classList.add('element__like_active');
  };

  _removeLikeCard = () => {
    this._cardLike.classList.remove('element__like_active');
  };

  //Создать карточку
  createCard() {
    this._card = this._getTemplate()
    this._cardText = this._card.querySelector('.element__place-name');
    this._cardImage = this._card.querySelector('.element__place-photo');
    this._cardLike = this._card.querySelector('.element__like');
    this._likeCounter = this._card.querySelector('.element__likes-counter');
    this._carDelete = this._card.querySelector('.element__delete');

    this._cardText.textContent = this._text;
    this._cardImage.src = this._link;
    this._cardImage.alt = `${this._text}.`;

    this._setEventListeners();
    this.setLikes(this._likes);

    if (this._ownerId !== this._userId) {
      this._carDelete.style.display = 'none';
    };

    return this._card;
  };
}
