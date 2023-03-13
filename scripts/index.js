const popupProfileFormOpen = document.querySelector(".profile__edit-button");
const popupCardFormOpen = document.querySelector(".profile__add-button");
const popupProfileForm = document.querySelector(".popup_edit-profile");
const popupCardForm = document.querySelector(".popup_add-card");
const popupFormClosed = document.querySelector(".popup__close-button");
const popupCardFormClosed = document.querySelector(".popup__close-button-card");
const popupCardViewClosed = document.querySelector(
  ".popup__close-button-card-view"
);
const formElement = document.querySelector(".popup__container");
const nameInput = document.querySelector(".popup__input_user_name");
const jobInput = document.querySelector(".popup__input_user_profession");
const cardNameInput = document.querySelector(".popup__input_card_name");
const cardLinkInput = document.querySelector(".popup__input_card_link");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__profession");

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

const cardTemplate = document.querySelector("#card-tempalte").content;
const cardContainer = document.querySelector(".element-grid");
const popupCardView = document.querySelector(".popup_card-view");

const cardContent = initialCards.map(function (el) {
  return {
    name: el.name,
    link: el.link,
  };
});

function openProfilePopup() {
  popupProfileForm.classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function openCardPopup() {
  popupCardForm.classList.add("popup_opened");
}

function closeProfilePopup() {
  popupProfileForm.classList.remove("popup_opened");
}

function closeCardPopup() {
  popupCardForm.classList.remove("popup_opened");
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeProfilePopup();
}

function closeCardViewPopup() {
  popupCardView.classList.remove("popup_opened");
}

function addCard({ name, link }) {
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__image").src = link;
  cardElement.querySelector(".element__text").textContent = name;
  cardContainer.prepend(cardElement);
  const likeBtn = document.querySelector(".element__button");
  likeBtn.addEventListener("click", function (evt) {
    const evtLikeBtn = evt.target;
    evtLikeBtn.classList.toggle("element__icon_active");
  });
  const TrashBtn = cardElement.querySelector(".element__trash-button");
  TrashBtn.addEventListener("click", function (evt) {
    const evtTrashBtn = evt.target;
    const Element = evtTrashBtn.closest(".element");
    Element.remove();
  });
  cardElement.addEventListener("click", function () {
    popupCardView.classList.add("popup_opened");
    const image = document.querySelector(".popup__image");
    const text = document.querySelector(".popup_card-view__text");
    image.src = cardElement.querySelector(".element__image").src;
    text.textContent = name;
  });
}

function enumCard() {
  cardContent.forEach(addCard);
}

enumCard();

function addCardFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  cardElement.querySelector(".element__image").src = cardLinkInput.value;
  cardElement.querySelector(".element__text").textContent = cardNameInput.value;
  cardContainer.prepend(cardElement);
  closeCardPopup();
}

popupProfileFormOpen.addEventListener("click", openProfilePopup);
popupCardFormOpen.addEventListener("click", openCardPopup);
popupFormClosed.addEventListener("click", closeProfilePopup);
popupCardFormClosed.addEventListener("click", closeCardPopup);
formElement.addEventListener("submit", handleFormSubmit);
popupCardForm.addEventListener("submit", addCardFormSubmit);
popupCardViewClosed.addEventListener("click", closeCardViewPopup);
