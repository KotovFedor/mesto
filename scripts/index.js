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
const cardTemplate = document.querySelector("#card-tempalte").content;
const cardContainer = document.querySelector(".element-grid");
const popupCardView = document.querySelector(".popup_card-view");
const cardViewPopupImage = document.querySelector(".popup__image");
const cardViewPopupText = document.querySelector(".popup__text-card-view");
const cardElement = cardTemplate.querySelector(".element");
const additionCardForm = document.getElementById("add-card-form");

function openPopup(popup) {
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

function bindCardLikeEventListener(cardElement) {
  const likeBtn = cardElement.querySelector(".element__button");
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("element__icon_active");
  });
}

function bindCardDeleteEventListener(cardElement) {
  const trashBtn = cardElement.querySelector(".element__trash-button");
  const card = trashBtn.closest(".element");
  trashBtn.addEventListener("click", () => {
    card.remove();
  });
}

function bindCardViewPopupListener(cardElement) {
  const elementImage = cardElement.querySelector(".element__image");
  elementImage.addEventListener("click", function () {
    openPopup(popupCardView);
    cardViewPopupImage.src = elementImage.src;
    cardViewPopupText.textContent =
      cardElement.querySelector(".element__text").textContent;
    cardViewPopupImage.alt = cardViewPopupText.textContent;
  });
}

function createCard({ name, link }) {
  const card = cardElement.cloneNode(true);
  const cardImage = card.querySelector(".element__image");
  cardImage.src = link;
  card.querySelector(".element__text").textContent = name;
  cardImage.alt = name;
  bindCardLikeEventListener(card);
  bindCardDeleteEventListener(card);
  bindCardViewPopupListener(card);
  return card;
}

function addCard({ name, link }) {
  const card = createCard({ name, link });
  cardContainer.prepend(card);
}

function renderInitialCards() {
  initialCards.forEach(addCard);
}

renderInitialCards();

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const link = cardLinkInput.value;
  const name = cardNameInput.value;
  addCard({ name, link });
  closeCardPopup();
  additionCardForm.reset();
}

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
