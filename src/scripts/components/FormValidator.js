export class FormValidator {
  constructor(validationObj, validationElement) {
    this._inputSelector = validationObj.inputSelector;
    this._submitButtonSelector = validationObj.submitButtonSelector;
    this._inactiveButtonClass = validationObj.inactiveButtonClass;
    this._inputErrorClass = validationObj.inputErrorClass;
    this._errorClass = validationObj.errorClass;
    this._formElement = validationElement;
  }

  enableValidation() {
    this._setEventListeners();
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", true);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled", true);
    }
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this.toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this.toggleButtonState();
      });
    });
  }

  removeErrors() {
    const spanErrorList = this._formElement.querySelectorAll(
      ".popup__input-error"
    );
    const inputErrorList = this._formElement.querySelectorAll(".popup__input");
    spanErrorList.forEach((span) => {
      span.textContent = "";
    });
    inputErrorList.forEach((input) => {
      input.classList.remove(this._inputErrorClass);
    });
  }
}
