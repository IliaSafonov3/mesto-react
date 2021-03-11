export const main = document.querySelector(".main-content");
export const popupButton = main.querySelector(".profile-info__button");
export const addCardButton = document.querySelector(".profile__button");
export const nameInput = document.querySelector("#name");
export const jobInput = document.querySelector("#self");
export const avatarImage = document.querySelector(".profile__avatar");
export const avatarButton = document.querySelector(
  ".profile__button-avatar"
);
export const cardList = document.querySelector(".elements");
export const validationConfig = {
  formSelector: ".pop-up__form",
  inputSelector: ".pop-up__input",
  submitButtonSelector: ".pop-up__save",
  inactiveButtonClass: "pop-up__save_invalid",
  inputErrorClass: "pop-up__input_invalid",
  errorClass: "popup__error_visible",
};
 