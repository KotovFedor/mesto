const popupAvatarFormOpenButton = document.querySelector(".avatar-edit-button");
const popupProfileFormOpenButton = document.querySelector(
  ".profile__edit-button"
);
const popupConfirmation = document.querySelector(".popup_delete-card");
const profileAvatar = document.querySelector(".profile__avatar");
const popupCardFormOpenButton = document.querySelector(".profile__add-button");
const popupAvatarForm = document.querySelector(".popup_edit-avatar-profile");
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
const editAvatarForm = document.getElementById("edit-avatar-profile-form");
const validationObj = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};
export {
  popupConfirmation,
  editAvatarForm,
  popupAvatarFormOpenButton,
  popupAvatarForm,
  profileAvatar,
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
};
