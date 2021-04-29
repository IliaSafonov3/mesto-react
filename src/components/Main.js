import Card from "./Card";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

export default Main;

function Main(props) {
  function handleCardClick(card) {
    props.handleCardClick(card);
  }
  function openAvatarPopup() {
    props.openAvatarPopup();
  }
  function openProfilePopup() {
    props.openProfilePopup();
  }
  function openCardPopup() {
    props.openCardPopup();
  }
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="main-content">
      <div className="line"></div>

      <section className="profile">
        <div className="profile__overlay">
          <button
            className="profile__button-avatar"
            onClick={openAvatarPopup}
          ></button>
          <img
            className="profile__avatar"
            src={currentUser.avatar}
            alt="Аватар профиля"
          />
        </div>
        <div className="profile-info">
          <div className="profile-info__title">
            <h1 className="profile-info__name">{currentUser.name}</h1>
            <button
              className="profile-info__button"
              onClick={openProfilePopup}
              type="button"
            ></button>
          </div>
          <h2 className="profile-info__subtitle">{currentUser.about}</h2>
        </div>
        <button
          type="button"
          className="profile__button"
          onClick={openCardPopup}
        ></button>
      </section>

      <section className="elements">
        {props.cards.map((card) => {
          return (
            <Card
              cards={props.cards}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete}
              key={card._id}
              handleCardClick={handleCardClick}
              card={card}
            />
          );
        })}
      </section>
    </main>
  );
}
