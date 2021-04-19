import React from 'react';
import Main from './Main.js'
import Header from './Header.js'
import Footer from './Footer.js'
import ImagePopup from './ImagePopup.js'
import PopupWithForm from './PopupWithForm.js'

function App(props) {

 const [selectedCard, setSelectedCard] = React.useState({
     isImagePopupOpen:false,
     imagePopupSource:'',
     imagePopupName:'',
 })
 const [isOpenedAvatar,setIsOpenedAvatar]= React.useState(false)
 const [isOpenedProfile, setIsOpenedProfile] = React.useState(false)
 const [isOpenedCard ,setIsOpenedCard] = React.useState(false)




    function handleCardClick(card){
        setSelectedCard({
            isImagePopupOpen:true,
            imagePopupSource:card.link,
            imagePopupName:card.name,
        })
    }
    function closeAllPopup(){
        setIsOpenedAvatar(false)
        setIsOpenedProfile(false)
        setIsOpenedCard(false)
        setSelectedCard({
            isImagePopupOpen:false,
            imagePopupSource:'',
            imagePopupName:'',
        })
        
    }
    function handleEditAvatarClick(){
        setIsOpenedAvatar(true)
    }
    function handleEditProfileClick(){
        setIsOpenedProfile(true)
}
    function handleAddPlaceClick(){
        setIsOpenedCard(true)
    }

  return (
    <div className='.page__content'>
      <div className="root">
            <Header/>

            <ImagePopup closeAllPopup ={closeAllPopup} imagePopup={selectedCard}  />

          

            <PopupWithForm closePopup ={closeAllPopup} isOpened={isOpenedProfile} title ='Редактировать профиль' children={
                <>
                            <input type="text" id="name" name="name" className="pop-up__input pop-up__name " placeholder="Имя" required minLength="2" maxLength="40" noValidate autoComplete="off"/>
                            <span className="pop-up__error" id="name-error"></span>
                            <input type="text" id="self" name="about" className="pop-up__input pop-up__self" placeholder="О себе" required minLength="2" maxLength="200" noValidate autoComplete="off"/>
                            <span className="pop-up__error" id='self-error'></span>
                            <button id="save" className="pop-up__save">Сохранить</button>
                </>
            }  />

            

            <PopupWithForm closePopup ={closeAllPopup} isOpened={isOpenedAvatar} title ='Обновить Аватар' children={
                <>
                        <input type="url" id="avatar" name="avatar" className="pop-up__input pop-up__new-avatar" placeholder="Ссылка на картинку" required  noValidate autoComplete="off"/>
                        <span className="pop-up__error" id='avatar-error'></span>
                        <button className="pop-up__save">Сохранить</button>
                </>
            }  />
            
            

            <PopupWithForm closePopup ={closeAllPopup} isOpened={isOpenedCard} title ='Новое место' children={
                <>
                            <input type="text" name="name" id="cardName" className="pop-up__input pop-up__input_card pop-up__name" placeholder="Название" minLength="2" maxLength="30" required noValidate autoComplete="off"/>
                            <span className="pop-up__error pop-up__error_card" id="cardName-error"></span>
                            <input type="url" name="link" id="imageSrc" className="pop-up__input pop-up__input_card pop-up__self" placeholder="Ссылка на картинку" required noValidate autoComplete="off"/>
                            <span className="pop-up__error pop-up__error_card" id="imageSrc-error"></span>
                            <button id='cardSave' className="pop-up__save pop-up__save_card">Сохранить</button>
                </>
            }  />

           

            <Main handleCardClick={handleCardClick}    openAvatarPopup ={handleEditAvatarClick} openProfilePopup={handleEditProfileClick} openCardPopup= {handleAddPlaceClick}/>

            <Footer/>
        </div>
    </div>
  );
}

export default App;
