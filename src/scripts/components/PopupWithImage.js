import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._popupImage = this._popupElement.querySelector(".popup__image");
    this._popupText = this._popupElement.querySelector(
      ".popup__text-card-view"
    );
  }
  open(data) {
    this._popupImage.src = data.link;
    this._popupImage.alt = data.name;
    this._popupText.textContent = data.name;
    super.open();
  }
}
