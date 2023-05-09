import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._popupImage = this._popupElement.querySelector(".popup__image");
    this._popupText = this._popupElement.querySelector(
      ".popup__text-card-view"
    );
  }
  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupText.textContent = name;
    super.open();
  }
}
