let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__container-form-close-button');
let submitButton = document.querySelector('.popup__container-form-submit-button');
let popupForm = document.querySelector('.popup__container-form');
let nameInput = document.querySelector('.popup__container-form-input-name');
let jobInput = document.querySelector('.popup__container-form-input-job');
let profileAvatarName = document.querySelector('.profile__avatar-name');
let profileAvatarHobby = document.querySelector('.profile__avatar-job');

editButton.addEventListener('click', function() {
  popup.style = `display: block`;
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



