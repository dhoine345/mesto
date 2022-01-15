let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__container-form-close-button');
let submitButton = document.querySelector('.popup__container-form-submit-button');
let popupForm = document.querySelector('.popup__container-form');
let nameInput = document.querySelector('.popup__container-form-input-name');
let jobInput = document.querySelector('.popup__container-form-input-job');
let profileAvatarName = document.querySelector('.profile__avatar-name');
let profileAvatarHobby = document.querySelector('.profile__avatar-job');
let elementLike = document.querySelectorAll('.element__like');

editButton.addEventListener('click', function() {
  popup.style = 'display: block';
});

closeButton.addEventListener('click', function() {
  popup.style = 'display: none';
});

submitButton.addEventListener('click', function() {
  popup.style = 'display: none';
});

for (let i = 0; i < elementLike.length; i += 1) {
 elementLike[i].addEventListener('click', function() {
 elementLike[i].style = 'background-image: url(./image/like_active.svg;)';
  });
};

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileAvatarName.textContent = nameInput.value;
  profileAvatarHobby.textContent = jobInput.value;
};

popupForm.addEventListener('submit', formSubmitHandler);

