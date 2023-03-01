let popupFormOpen = document.querySelector(".edit-button");
let popupForm = document.querySelector(".popup");
let popupFormClosed = document.querySelector(".popup__close-icon");

popupFormOpen.addEventListener("click", function () {
  popupForm.classList.add("popup_opened");
});

popupFormClosed.addEventListener("click", function () {
  popupForm.classList.remove("popup_opened");
});

// Находим форму в DOM
let formElement = document.querySelector(".popup__container"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
let nameInput = document.querySelector(".popup__name"); // Воспользуйтесь инструментом .querySelector()
let jobInput = document.querySelector(".popup__profession"); // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  let nameValue = nameInput.value;

  let jobValue = jobInput.value;

  // Выберите элементы, куда должны быть вставлены значения полей
  let profileName = document.querySelector(".profile__info_name");
  let profileJob = document.querySelector(".profile__info_profession");
  // Вставьте новые значения с помощью textContent
  profileName.textContent = nameValue;
  profileJob.textContent = jobValue;
  popupForm.classList.remove("popup_opened");
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
