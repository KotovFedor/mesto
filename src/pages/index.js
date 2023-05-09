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

const popupEditProfile = new PopupWithForm(popupProfileForm, {
  handleFormSubmit: (item) => {
    userInfoProfile.setUserInfo(item);
    popupEditProfile.close();
  },
});

popupEditProfile.setEventListeners();

popupProfileFormOpenButton.addEventListener("click", () => {
  const profile = userInfoProfile.getUserInfo();
  nameInput.value = profile.name;
  jobInput.value = profile.profession;
  popupEditProfile.open();
  profileFormValidator.enableValidation();
});

// Функция возвращает новую карточку
function generateCard(item) {
  const card = new Card(
    {
      data: item,
      handleCardClick: () => {
        popupWithImage.open(item.name, item.link);
      },
    },
    "#card-tempalte"
  );
  return card;
}

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardTemplate = generateCard(item).createCard();
      cardList.addItem(cardTemplate);
    },
  },
  cardContainer
);

cardList.renderItems();

const popupAddCard = new PopupWithForm(popupCardForm, {
  handleFormSubmit: (item) => {
    const cardElement = generateCard(item).createCard();
    cardList.addItem(cardElement);
    cardFormValidator.removeErrors();
    popupAddCard.close();
  },
});

popupAddCard.setEventListeners();

popupCardFormOpenButton.addEventListener("click", () => {
  popupAddCard.open();
  cardFormValidator.enableValidation();
});

const popupWithImage = new PopupWithImage(popupCardView);
popupWithImage.setEventListeners();
