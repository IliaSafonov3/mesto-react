import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function EditProfilePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about,
    });
  }

  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState("");
  const [about, setAbout] = React.useState("");

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setAbout(e.target.value);
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      closePopup={props.onClose}
      isOpened={props.isOpen}
      title="Редактировать профиль"
      children={
        <>
          <input
            value={name}
            onChange={handleChangeName}
            type="text"
            id="name"
            name="name"
            className="pop-up__input pop-up__name "
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
            noValidate
            autoComplete="off"
          />
          <span className="pop-up__error" id="name-error"></span>
          <input
            value={about}
            onChange={handleChangeDescription}
            type="text"
            id="self"
            name="about"
            className="pop-up__input pop-up__self"
            placeholder="О себе"
            required
            minLength="2"
            maxLength="200"
            noValidate
            autoComplete="off"
          />
          <span className="pop-up__error" id="self-error"></span>
          <button id="save" className="pop-up__save">
            Сохранить
          </button>
        </>
      }
    />
  );
}
export default EditProfilePopup;
