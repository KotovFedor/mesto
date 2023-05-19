export class Card {
  constructor(
    data,
    userId,
    { cardTemplate, handleCardClick, deleteCards, handleLike, handleDeleteLike }
  ) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._cardTemplate = cardTemplate;
    this._id = data._id;
    this._owner = data.owner;
    this._likes = data.likes;
    this._userId = userId;
    this._deleteCard = deleteCards;
    this._handleLike = handleLike;
    this._handleDeleteLike = handleDeleteLike;
    this._countLike = data.likes.length;
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
    this._cardTemplate.id = this._id;
    this._checkLike();
    if (this._owner._id !== this._userId) {
      this._cardTemplate.querySelector(".element__trash-button").style.display =
        "none";
    }
    this._addTemplateEvent();
    return this._cardTemplate;
  }

  _addTemplateEvent() {
    this._likeButton = this._cardTemplate.querySelector(".element__icon");
    this._likeButton.addEventListener("click", () => {
      this._showLike();
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

  _checkLike() {
    this._likes.forEach((item) => {
      if (item._id === this._myId) {
        this._likeIconElement.classList.add("element__icon_active");
        return;
      }
    });
    this._cardTemplate.querySelector(".like-count").textContent =
      this._countLike;
  }

  _showLike() {
    this._cardTemplate
      .querySelector(".element__icon")
      .classList.contains("element__icon_active")
      ? this._handleDeleteLike()
      : this._handleLike();
  }

  _toggleLike(data) {
    this._likeButton.classList.toggle("element__icon_active");
    this._cardTemplate.querySelector(".like-count").textContent = data.length;
  }

  _removeCard() {
    this._cardTemplate.remove();
    this._cardTemplate = null;
  }
}
