let popupFormOpen = document.querySelector('.profile__edit-button');
let popupForm = document.querySelector('.popup');
let popupFormClosed = document.querySelector('.popup__close-icon');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_user_name');
let jobInput = document.querySelector('.popup__input_user_profession');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__profession');

function popupOpen() {
  popupForm.classList.add('popup_opened');
}

function popupClose() {
  popupForm.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupClose();
}

popupFormOpen.addEventListener('click', popupOpen);
popupFormClosed.addEventListener('click', popupClose);
formElement.addEventListener('submit', handleFormSubmit);
