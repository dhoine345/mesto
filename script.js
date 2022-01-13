let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup')
let closeButton = document.querySelector('.popup__close-button')
let submitButton = document.querySelector('.form__submit-button')

editButton.addEventListener('click', function() {
  popup.style = `display: grid`;
});

closeButton.addEventListener('click', function() {
  popup.style = `display: none`;
});

submitButton.addEventListener('click', function() {
  
});
