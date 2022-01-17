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
  popup.style = 'display: flex' 'align-items: center';
});

closeButton.addEventListener('click', function() {
  popup.style = 'display: none';
});

submitButton.addEventListener('click', function() {
  popup.style = 'display: none';
});

for (let i = 0; i < elementLike.length; i += 1) {
 elementLike[i].addEventListener('click', function() {
 elementLike[i].classList.add('element__like_active');
 elementLike[i].classList.remove('button-hover');
  });
};

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileAvatarName.textContent = nameInput.value;
  profileAvatarHobby.textContent = jobInput.value;
};

popupForm.addEventListener('submit', formSubmitHandler);

