//Переменные
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = document.querySelector('.popup__container-form-close-button');
let popupForm = document.querySelector('.popup__container-form');
let nameInput = document.querySelector('.popup__container-form-input_type_name');
let jobInput = document.querySelector('.popup__container-form-input_type_job');
let profileAvatarName = document.querySelector('.profile__avatar-name');
let profileAvatarHobby = document.querySelector('.profile__avatar-job');


function openPopup () {
  
}

editButton.addEventListener('click', function() {
  popup.classList.toggle('popup_opened');
});

closeButton.addEventListener('click', function() {
  popup.style = 'display: none';
});


function confirmPopup () {
  popup.style = 'display: none';
};

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileAvatarName.textContent = nameInput.value;
  profileAvatarHobby.textContent = jobInput.value;
  confirmPopup ();
};

popupForm.addEventListener('submit', formSubmitHandler);

/*for (let i = 0; i < elementLike.length; i += 1) {
 elementLike[i].addEventListener('click', function() {
 elementLike[i].classList.add('element__like_active');
 });
};*/
/*let elementLike = document.querySelectorAll('.element__like');*/
