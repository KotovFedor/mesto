const validationObj = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-btn",
  inactiveButtonClass: "popup__submit-btn_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

const enableValidation = ({ formSelector, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, rest);
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
  });
};

const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  { inputErrorClass, errorClass }
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};

const hideInputError = (
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = "";
};

const isValid = (
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, {
      inputErrorClass,
      errorClass,
    });
  } else {
    hideInputError(formElement, inputElement, { inputErrorClass, errorClass });
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (
  inputList,
  buttonElement,
  { inactiveButtonClass }
) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled", true);
  }
};

const setEventListeners = (
  formElement,
  {
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass,
  }
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  const buttonElement = formElement.querySelector(submitButtonSelector);
  toggleButtonState(inputList, buttonElement, { inactiveButtonClass });

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, { inputErrorClass, errorClass });
      toggleButtonState(inputList, buttonElement, {
        inactiveButtonClass,
      });
    });
  });
};

enableValidation(validationObj);