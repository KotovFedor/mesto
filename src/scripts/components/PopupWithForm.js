import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupElement, { handleFormSubmit }) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".popup__form");
  }

  _getInputValues() {
    this._inputs = this._popupElement.querySelectorAll(".popup__input");
    this._dataInputs = {};
    this._inputs.forEach((input) => {
      this._dataInputs[input.name] = input.value;
    });
    return this._dataInputs;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._submit = this._handleSubmit.bind(this);

    this._popupForm.addEventListener("submit", this._submit);
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
