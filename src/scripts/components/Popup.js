export class Popup {
  constructor(popupElement) {
    this._popupElement = popupElement;
  }

  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("click", this._handleOverlayClickClose);
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupElement.classList.remove("popup_opened");
    this._popupElement.removeEventListener("keydown", this._handleEscClose);
    this._popupElement.removeEventListener(
      "click",
      this._handleOverlayClickClose
    );
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  _handleOverlayClickClose = (evt) => {
    if (evt.target.classList.contains("popup")) {
      this.close();
    }
  };

  setEventListeners() {
    const closeButton = this._popupElement.querySelector(
      ".popup__close-button"
    );
    closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}
