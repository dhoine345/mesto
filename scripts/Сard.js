//Создание класса карточки
export class Card {
  constructor(data, cardTemplateSelector, clickImage) {
    this._cardTemplate = document.querySelector(cardTemplateSelector).content;
    this._data = data;
    this._clickImage = clickImage;
  }

  //Поставить лайк, удалить карточку
  _likeCard = () => {
    this._cardLike.classList.toggle('element__like_active');
  };

  _deleteCard = () => {
    this._card.remove();
  };

  //Установить слушателей
  _setEventListeners() {
    this._carDelete = this._card.querySelector('.element__delete');

    this._carDelete.addEventListener('click', this._deleteCard);
    this._cardLike.addEventListener('click', this._likeCard);
    this._cardImage.addEventListener('click', () => this._clickImage(this._data.link, this._data.name));
  }

  //Создать карточку
  createCard() {
    this._card = this._cardTemplate.querySelector('.element').cloneNode(true);
    this._cardText = this._card.querySelector('.element__place-name');
    this._cardImage = this._card.querySelector('.element__place-photo');
    this._cardLike = this._card.querySelector('.element__like');

    this._cardText.textContent = this._data.name;
    this._cardImage.src = this._data.link;
    this._cardImage.alt = `${this._data.name}.`;

    this._setEventListeners();

    return this._card;
  };
}
