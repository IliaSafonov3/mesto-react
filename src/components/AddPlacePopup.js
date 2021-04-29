import PopupWithForm from "./PopupWithForm.js";
import React from "react";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({
      name,
      link,
    });
    setName("");
    setLink("");
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      closePopup={props.onClose}
      isOpened={props.isOpen}
      title="Новое место"
      children={
        <>
          <input
            value={name}
            onChange={handleChangeName}
            type="text"
            name="name"
            id="cardName"
            className="pop-up__input pop-up__input_card pop-up__name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
            noValidate
            autoComplete="off"
          />
          <span
            className="pop-up__error pop-up__error_card"
            id="cardName-error"
          ></span>
          <input
            value={link}
            onChange={handleChangeLink}
            type="url"
            name="link"
            id="imageSrc"
            className="pop-up__input pop-up__input_card pop-up__self"
            placeholder="Ссылка на картинку"
            required
            noValidate
            autoComplete="off"
          />
          <span
            className="pop-up__error pop-up__error_card"
            id="imageSrc-error"
          ></span>
          <button id="cardSave" className="pop-up__save pop-up__save_card">
            Сохранить
          </button>
        </>
      }
    />
  );
}
export default AddPlacePopup;
