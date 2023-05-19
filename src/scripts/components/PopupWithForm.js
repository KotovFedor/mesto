import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupElement, { handleFormSubmit }) {
    super(popupElement);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._submitButton = this._popupElement.querySelector(".popup__submit-btn");
    this._buttonText = this._submitButton.textContent;
  }

  getInputValues() {
    this._inputs = this._popupElement.querySelectorAll(".popup__input");
    this._dataInputs = {};
    this._inputs.forEach((input) => {
      this._dataInputs[input.name] = input.value;
    });
    return this._dataInputs;
  }

  _handleSubmit(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this.getInputValues());
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._submit = this._handleSubmit.bind(this);
    this._popupForm.addEventListener("submit", this._submit);
  }

  load(isLoading) {
    if (isLoading) {
      this._submitButton.classList.add("popup__submit-btn_loading");
      this._submitButton.textContent = "Сохранение...";
    } else if (!isLoading) {
      this._submitButton.classList.remove("popup__submit-btn_loading");
      this._submitButton.textContent = this._buttonText;
    }
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}
