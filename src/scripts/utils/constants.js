const popupProfileFormOpenButton = document.querySelector(
  ".profile__edit-button"
);
const popupCardFormOpenButton = document.querySelector(".profile__add-button");
const popupProfileForm = document.querySelector(".popup_edit-profile");
const popupCardForm = document.querySelector(".popup_add-card");
const nameInput = document.querySelector(".popup__input_user_name");
const jobInput = document.querySelector(".popup__input_user_profession");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__profession");
const cardContainer = document.querySelector(".element-grid");
const popupCardView = document.querySelector(".popup_card-view");
const editingProfileForm = document.getElementById("edit-profile-form");
const additionCardForm = document.getElementById("add-card-form");
const validationObj = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};
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

export {
  popupProfileFormOpenButton,
  popupCardFormOpenButton,
  popupProfileForm,
  popupCardForm,
  nameInput,
  jobInput,
  profileName,
  profileJob,
  cardContainer,
  popupCardView,
  editingProfileForm,
  additionCardForm,
  validationObj,
  initialCards,
};
