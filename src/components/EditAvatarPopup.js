import PopupWithForm from "./PopupWithForm.js";
import React from "react";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      closePopup={props.onClose}
      isOpened={props.isOpen}
      title="Обновить Аватар"
      children={
        <>
          <input
            ref={avatarRef}
            type="url"
            id="avatar"
            name="avatar"
            className="pop-up__input pop-up__new-avatar"
            placeholder="Ссылка на картинку"
            required
            noValidate
            autoComplete="off"
          />
          <span className="pop-up__error" id="avatar-error"></span>
          <button className="pop-up__save">Сохранить</button>
        </>
      }
    />
  );
}

export default EditAvatarPopup;
