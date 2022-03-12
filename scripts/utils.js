export function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closedByEscape);
};

export function closedByEscape(evt) {
  if (evt.key == 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    if (popupOpened)
      closePopup(popupOpened);
  }
};

export function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closedByEscape);
};

