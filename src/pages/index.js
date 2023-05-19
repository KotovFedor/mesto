import "./index.css";
import { Card } from "../scripts/components/Card.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import { Section } from "../scripts/components/Section.js";
import { PopupWithForm } from "../scripts/components/PopupWithForm.js";
import { PopupWithImage } from "../scripts/components/PopupWithImage.js";
import { UserInfo } from "../scripts/components/UserInfo.js";
import { Api } from "../scripts/components/Api.js";
import { PopupWithConfirmation } from "../scripts/components/PopupWithConfirmation.js";
import {
  popupConfirmation,
  editAvatarForm,
  popupAvatarFormOpenButton,
  popupAvatarForm,
  profileAvatar,
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
} from "../scripts/utils/constants.js";

export const api = new Api({
  serverUrl: "https://mesto.nomoreparties.co/v1/cohort-66",
  headers: {
    authorization: "0d9e5e06-5fb6-4948-aef4-c066b6b409b2",
    "Content-Type": "application/json",
  },
});

const profileFormValidator = new FormValidator(
  validationObj,
  editingProfileForm
);

const cardFormValidator = new FormValidator(validationObj, additionCardForm);

const userInfoProfile = new UserInfo({
  nameSelector: profileName,
  professionSelector: profileJob,
  avatarSelector: profileAvatar,
});

const popupWithConfirmation = new PopupWithConfirmation(popupConfirmation);
popupWithConfirmation.setEventListeners();

const popupEditProfile = new PopupWithForm(popupProfileForm, {
  handleFormSubmit: () => {
    popupEditProfile.load(true);
    const inputValues = popupEditProfile._getInputValues();
    api
      .sendUserInfo(inputValues)
      .then((data) => {
        userInfoProfile.setUserInfo(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupEditProfile.load(false);
        popupEditProfile.close();
      });
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

const popupWithImage = new PopupWithImage(popupCardView);
popupWithImage.setEventListeners();

const popupEditAvatar = new PopupWithForm(popupAvatarForm, {
  handleFormSubmit: () => {
    popupEditAvatar.load(true);
    const inputValues = popupEditAvatar.getInputValues();
    console.log(inputValues);
    api
      .sendUserAvatar(inputValues)
      .then((data) => {
        console.log(data);
        userInfoProfile.setUserAvatar(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupEditAvatar.load(false);
        popupEditAvatar.close();
      });
  },
});

popupEditAvatar.setEventListeners();

const avatarFormValidator = new FormValidator(validationObj, editAvatarForm);

popupAvatarFormOpenButton.addEventListener("click", () => {
  avatarFormValidator.removeErrors();
  avatarFormValidator.enableValidation();
  popupEditAvatar.open();
});

Promise.all([api.getUserInfo(), api.getCards()])
  .then((data) => {
    userInfoProfile.setUserInfo(data[0]);

    const userId = data[0]._id;

    const cardList = new Section(
      data[1],
      {
        renderer: (data) => {
          const card = new Card(data, userId, {
            cardTemplate: "#card-tempalte",
            handleCardClick: () => {
              popupWithImage.open(data);
            },
            deleteCards: () => {
              popupWithConfirmation.open();
              popupWithConfirmation.setHandleSubmit(() => {
                api
                  .deleteCard(data._id)
                  .then(() => {
                    card._removeCard();
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              });
            },
            handleLike: () => {
              api
                .addLike(data._id)
                .then((data) => {
                  card._toggleLike(data.likes);
                })
                .catch((error) => {
                  console.log(error);
                });
            },
            handleDeleteLike: () => {
              api
                .deleteLike(data._id)
                .then((data) => {
                  card._toggleLike(data.likes);
                })
                .catch((error) => {
                  console.log(error);
                });
            },
          });
          const cardElement = card.createCard(data);
          cardList.addItem(cardElement);
        },
      },
      cardContainer
    );

    cardList.renderItems();

    const popupAddCard = new PopupWithForm(popupCardForm, {
      handleFormSubmit: () => {
        popupAddCard.load(true);
        const inputValues = popupAddCard.getInputValues();
        api
          .addCard(inputValues)
          .then((data) => {
            const card = new Card(data, userId, {
              cardTemplate: "#card-tempalte",
              handleCardClick: () => {
                popupWithImage.open(data);
              },
              deleteCards: () => {
                popupWithConfirmation.open();
                popupWithConfirmation.setHandleSubmit(() => {
                  api
                    .deleteCard(data._id)
                    .then(() => {
                      card._removeCard();
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                });
              },
              handleLike: () => {
                api
                  .addLike(data._id)
                  .then((data) => {
                    card._toggleLike(data.likes);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              },
              handleDeleteLike: () => {
                api
                  .deleteLike(data._id)
                  .then((data) => {
                    card._toggleLike(data.likes);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              },
            });
            const cardElement = card.createCard(data);
            cardList.addItem(cardElement);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            popupAddCard.load(false);
            popupAddCard.close();
          });
      },
    });

    popupAddCard.setEventListeners();

    popupCardFormOpenButton.addEventListener("click", () => {
      popupAddCard.open();
      cardFormValidator.enableValidation();
    });
  })
  .catch((error) => {
    console.log(error);
  });
