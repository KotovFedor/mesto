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
const cardViewPopupimage = document.querySelector(".popup__image");
const cardViewPopuptext = document.querySelector(".popup__text-card-view");
const cardElement = cardTemplate.querySelector(".element");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openProfilePopup() {
  openPopup(popupProfileForm);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function openCardPopup() {
  openPopup(popupCardForm);
}

function closeProfilePopup() {
  closePopup(popupProfileForm);
}

function closeCardPopup() {
  closePopup(popupCardForm);
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

function openCardViewPopup(cardElement) {
  const elementImage = cardElement.firstElementChild;
  elementImage.addEventListener("click", function () {
    openPopup(popupCardView);
    cardViewPopupimage.src = cardElement.querySelector(".element__image").src;
    cardViewPopuptext.textContent =
      cardElement.querySelector(".element__text").textContent;
    cardViewPopupimage.alt = cardViewPopuptext.textContent;
  });
}

function createCard({ name, link }) {
  const card = cardElement.cloneNode(true);
  card.querySelector(".element__image").src = link;
  card.querySelector(".element__text").textContent = name;
  card.querySelector(".element__image").alt = name;
  bindCardLikeEventListener(card);
  bindCardDeleteEventListener(card);
  openCardViewPopup(card);
  return card;
}

function addCard({ name, link }) {
  const card = createCard({ name, link });
  cardContainer.prepend(card);
}

function renderInitialCards() {
  initialCards.forEach(createCard);
  initialCards.forEach(addCard);
}

renderInitialCards();

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const card = cardElement.cloneNode(true);
  const link = (card.querySelector(".element__image").src =
    cardLinkInput.value);
  const name = (card.querySelector(".element__text").textContent =
    cardNameInput.value);
  createCard({ name, link });
  addCard({ name, link });
  closeCardPopup();
  document.getElementById("add-card-form").reset();
  bindCardLikeEventListener(cardElement);
  bindCardDeleteEventListener(cardElement);
  openCardViewPopup(cardElement);
}

popupProfileFormOpenButton.addEventListener("click", openProfilePopup);
popupCardFormOpenButton.addEventListener("click", openCardPopup);
popupFormClosedButton.addEventListener("click", closeProfilePopup);
popupCardFormClosedButton.addEventListener("click", closeCardPopup);
containerEditProfileForm.addEventListener("submit", handleProfileFormSubmit);
popupCardForm.addEventListener("submit", handleCardFormSubmit);
popupCardViewClosedButton.addEventListener("click", closeCardViewPopup);
