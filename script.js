let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__close-button');
let submitButton = document.querySelector('.form__submit-button');
let popupForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('.form__input-name');
let jobInput = document.querySelector('.form__input-job');
let profileAvatarName = document.querySelector('.profile__avatar-name');
let profileAvatarHobby = document.querySelector('.profile__avatar-job');

editButton.addEventListener('click', function() {
  popup.style = `display: grid`;
});

closeButton.addEventListener('click', function() {
  popup.style = `display: none`;
});

submitButton.addEventListener('click', function() {
  popup.style = `display: none`;
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileAvatarName.textContent = nameInput.value;
  profileAvatarHobby.textContent = jobInput.value;
};

popupForm.addEventListener('submit', formSubmitHandler);



