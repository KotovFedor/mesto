import "./index.css";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import {
  popupProfileFormOpenButton,
  popupCardFormOpenButton,
  popupProfileForm,
  popupCardForm,
  nameInput,
  jobInput,
  profileName,
  profileJob,
  cardContainer,
  popupCardView,
  editingProfileForm,
  additionCardForm,
  validationObj,
  initialCards,
} from "../scripts/utils/constants.js";

const profileFormValidator = new FormValidator(
  validationObj,
  editingProfileForm
);

const cardFormValidator = new FormValidator(validationObj, additionCardForm);

const userInfoProfile = new UserInfo({
  nameSelector: profileName,
  professionSelector: profileJob,
});

const editPopup = new PopupWithForm(popupProfileForm, {
  handleFormSubmit: (item) => {
    userInfoProfile.setUserInfo(item);
    editPopup.close();
  },
});

editPopup.setEventListeners();

popupProfileFormOpenButton.addEventListener("click", () => {
  const profile = userInfoProfile.getUserInfo();
  nameInput.value = profile.name;
  jobInput.value = profile.profession;
  editPopup.open();
  profileFormValidator.enableValidation();
});

const firstCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        {
          data: item,
          handleCardClick: () => {
            popupWithImage.open(item.name, item.link);
          },
        },
        "#card-tempalte"
      );
      const cardTemplate = card.createCard();
      firstCards.addItem(cardTemplate);
    },
  },
  cardContainer
);

firstCards.renderItems();

const addPopup = new PopupWithForm(popupCardForm, {
  handleFormSubmit: (item) => {
    const card = new Card(
      {
        data: item,
        handleCardClick: () => {
          popupWithImage.open(item.name, item.link);
        },
      },
      "#card-tempalte"
    );

    const cardElement = card.createCard();
    firstCards.addItem(cardElement);
    cardFormValidator.removeErrors();
    addPopup.close();
  },
});

addPopup.setEventListeners();

popupCardFormOpenButton.addEventListener("click", () => {
  addPopup.open();
  cardFormValidator.enableValidation();
});

const popupWithImage = new PopupWithImage(popupCardView);
popupWithImage.setEventListeners();
