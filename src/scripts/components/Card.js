export class Card {
  constructor({ data, handleCardClick }, cardTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
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
      this._handleCardClick();
    });
  }

  _toggleLike() {
    this._likeButton.classList.toggle("element__icon_active");
  }

  _deleteCard() {
    this._cardTemplate.remove();
  }
}
