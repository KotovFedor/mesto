import { openPopup, popupCardView } from "./index.js";

const cardViewPopupImage = document.querySelector(".popup__image");
const cardViewPopupText = document.querySelector(".popup__text-card-view");

export class Card {
  constructor(name, link, cardTemplate) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;
  }

  _getCardTemplate() {
    const cardTemplate = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".element")
      .cloneNode(true);
    return cardTemplate;
  }

  createCard() {
    this._cardTemplate = this._getCardTemplate();
    this._cardImage = this._cardTemplate.querySelector(".element__image");
    this._cardText = this._cardTemplate.querySelector(".element__text");
    this._cardText.textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._addTemplateEvent();
    return this._cardTemplate;
  }

  _addTemplateEvent() {
    this._likeButton = this._cardTemplate.querySelector(".element__button");
    this._likeButton.addEventListener("click", () => {
      this._toggleLike();
    });

    this._cardTemplate
      .querySelector(".element__trash-button")
      .addEventListener("click", () => {
        this._deleteCard();
      });

    this._cardImage.addEventListener("click", () => {
      this._openCardImage();
    });
  }

  _toggleLike() {
    this._likeButton.classList.toggle("element__icon_active");
  }

  _deleteCard() {
    this._cardTemplate.remove();
  }

  _openCardImage() {
    openPopup(popupCardView);
    cardViewPopupImage.src = this._link;
    cardViewPopupText.textContent = this._name;
    cardViewPopupImage.alt = cardViewPopupText.textContent;
  }
}
