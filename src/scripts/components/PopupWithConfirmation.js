import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupElement) {
    super(popupElement);
    this._form = this._popupElement.querySelector("#delete-card-form");
  }

  setHandleSubmit(call) {
    this._handleSubmit = call;
  }

  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit();
      this.close();
    });
    super.setEventListeners();
  }
}
