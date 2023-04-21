import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const popupProfileFormOpenButton = document.querySelector(
  ".profile__edit-button"
);
const popupCardFormOpenButton = document.querySelector(".profile__add-button");
const popupProfileForm = document.querySelector(".popup_edit-profile");
const popupCardForm = document.querySelector(".popup_add-card");
const popupFormClosedButton = document.querySelector(".popup__close-button");
const popupCardFormClosedButton = document.querySelector(
  ".popup__close-button-card"
);
const popupCardViewClosedButton = document.querySelector(
  ".popup__close-button-card-view"
);
const containerEditProfileForm = document.querySelector(
  ".popup__container-edit-profile-form"
);
const nameInput = document.querySelector(".popup__input_user_name");
const jobInput = document.querySelector(".popup__input_user_profession");
const cardNameInput = document.querySelector(".popup__input_card_name");
const cardLinkInput = document.querySelector(".popup__input_card_link");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__profession");
const cardContainer = document.querySelector(".element-grid");
export const popupCardView = document.querySelector(".popup_card-view");
const additionCardForm = document.getElementById("add-card-form");
const validationObj = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};
const formList = document.querySelectorAll(".popup__form");
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEscape);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEscape);
}

function removeErrors(popup) {
  const spanErrorList = popup.querySelectorAll(".popup__input-error");
  const inputErrorList = popup.querySelectorAll(".popup__input");

  spanErrorList.forEach((span) => {
    span.textContent = "";
  });
  inputErrorList.forEach((input) => {
    input.classList.remove("popup__input_type_error");
  });
}

function closePopupByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function openProfilePopup() {
  openPopup(popupProfileForm);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  const submitButton =
    containerEditProfileForm.querySelector(".popup__submit-btn");
  submitButton.classList.remove("popup__submit-btn_inactive");
  submitButton.removeAttribute("disabled", true);
}

function openCardPopup() {
  openPopup(popupCardForm);
  const submitButton = additionCardForm.querySelector(".popup__submit-btn");
  submitButton.classList.add("popup__submit-btn_inactive");
  submitButton.setAttribute("disabled", true);
}

function closeProfilePopup() {
  removeErrors(popupProfileForm);
  closePopup(popupProfileForm);
}

function closeCardPopup() {
  removeErrors(popupCardForm);
  closePopup(popupCardForm);
  additionCardForm.reset();
}

function closeCardViewPopup() {
  closePopup(popupCardView);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeProfilePopup();
}

function addCard(cardTemplate, cardContainer) {
  cardContainer.prepend(cardTemplate);
}

function renderInitialCards() {
  initialCards.forEach((item) => {
    const card = new Card(item.name, item.link, "#card-tempalte");
    const cardTemplate = card.createCard();
    addCard(cardTemplate, cardContainer);
  });
}

renderInitialCards();

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const link = cardLinkInput.value;
  const name = cardNameInput.value;
  const card = new Card(name, link, "#card-tempalte");
  const cardTemplate = card.createCard();
  addCard(cardTemplate, cardContainer);

  closeCardPopup();
  additionCardForm.reset();
}

formList.forEach((formElement) => {
  const formValidator = new FormValidator(validationObj, formElement);
  formValidator.enableValidation();
});

popupProfileFormOpenButton.addEventListener("click", openProfilePopup);
popupCardFormOpenButton.addEventListener("click", openCardPopup);

popupFormClosedButton.addEventListener("click", closeProfilePopup);
popupCardFormClosedButton.addEventListener("click", closeCardPopup);
popupCardViewClosedButton.addEventListener("click", closeCardViewPopup);

document.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup")) {
    closeProfilePopup();
    closeCardPopup();
    closeCardViewPopup();
  }
});

containerEditProfileForm.addEventListener("submit", handleProfileFormSubmit);
popupCardForm.addEventListener("submit", handleCardFormSubmit);
