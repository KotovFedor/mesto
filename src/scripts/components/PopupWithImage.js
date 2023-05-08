import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  open(name, link) {
    const popupImage = document.querySelector(".popup__image");
    const popupText = document.querySelector(".popup__text-card-view");
    console.log(popupImage, popupText);
    popupImage.src = link;
    popupImage.alt = name;
    popupText.textContent = name;
    super.open();
  }
}
