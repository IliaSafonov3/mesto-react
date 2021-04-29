import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  function handleCardClick() {
    props.handleCardClick(props.card);
  }

  function onCardLike() {
    props.onCardLike(props.card);
  }
  function onCardDelete() {
    props.onCardDelete(props.card);
  }
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = `element__trashcan ${
    !isOwn ? "element__trashcan_disabled" : ""
  }`;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_liked" : ""
  }`;

  return (
    <div className="element">
      <button
        className={cardDeleteButtonClassName}
        onClick={onCardDelete}
        type="button"
      ></button>
      <img
        className="element__image"
        src={props.card.link}
        alt={props.card.title}
        onClick={handleCardClick}
      />
      <div className="element__rectangle">
        <h3 className="element__title">{props.card.name}</h3>
        <div className="element__like_container">
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={onCardLike}
          ></button>
          <p className="element__like-quantity">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
