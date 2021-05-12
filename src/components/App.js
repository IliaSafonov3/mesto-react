import React from "react";
import Main from "./Main.js";
import Header from "./Header.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/api.js";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import SignUp from "./SignUp"
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App(props) {
  const [selectedCard, setSelectedCard] = React.useState({
    isImagePopupOpen: false,
    imagePopupSource: "",
    imagePopupName: "",
  });
  const [isOpenedAvatar, setIsOpenedAvatar] = React.useState(false);
  const [isOpenedProfile, setIsOpenedProfile] = React.useState(false);
  const [isOpenedCard, setIsOpenedCard] = React.useState(false);
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => setCards(data))
      .catch(console.log("error"));
  }, []);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => setCurrentUser(data))
      .catch(console.log("error"));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    }).catch(console.log("error"));
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards(cards.filter((item) => item._id !== card._id));
      })
      .catch(console.log("error"));
  }

  function handleAddPlaceSubmit(obj) {
    api
      .addCard(obj)
      .then((newCard) => setCards([newCard, ...cards]))
      .then(closeAllPopup())
      .catch(console.log("error"));
  }

  function handleUpdateAvatar(obj) {
    api
      .setAvatar(obj)
      .then((data) => setCurrentUser(data))
      .then(closeAllPopup())
      .catch(console.log("error"));
  }

  function handleUpdateUser(obj) {
    api
      .setProfile(obj)
      .then((data) => setCurrentUser(data))
      .then(closeAllPopup())
      .catch(console.log("error"));
  }

  function handleCardClick(card) {
    setSelectedCard({
      isImagePopupOpen: true,
      imagePopupSource: card.link,
      imagePopupName: card.name,
    });
  }
  function closeAllPopup() {
    setIsOpenedAvatar(false);
    setIsOpenedProfile(false);
    setIsOpenedCard(false);
    setSelectedCard({
      isImagePopupOpen: false,
      imagePopupSource: "",
      imagePopupName: "",
    });
  }
  function handleEditAvatarClick() {
    setIsOpenedAvatar(true);
  }
  function handleEditProfileClick() {
    setIsOpenedProfile(true);
  }
  function handleAddPlaceClick() {
    setIsOpenedCard(true);
  }

  return (


    <CurrentUserContext.Provider value={currentUser}>
    <SignUp/>

      <div className=".page__content">
        <div className="root">
          <Header />

          <ImagePopup closeAllPopup={closeAllPopup} imagePopup={selectedCard} />

          <EditProfilePopup
            onUpdateUser={handleUpdateUser}
            isOpen={isOpenedProfile}
            onClose={closeAllPopup}
          />

          <EditAvatarPopup
            onUpdateAvatar={handleUpdateAvatar}
            isOpen={isOpenedAvatar}
            onClose={closeAllPopup}
          />

          <AddPlacePopup
            onAddPlace={handleAddPlaceSubmit}
            isOpen={isOpenedCard}
            onClose={closeAllPopup}
          />

          <Main
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            handleCardClick={handleCardClick}
            openAvatarPopup={handleEditAvatarClick}
            openProfilePopup={handleEditProfileClick}
            openCardPopup={handleAddPlaceClick}
          />

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
