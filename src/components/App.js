import React from 'react';
import Main from './Main.js'
import Header from './Header.js'
import Footer from './Footer.js'
import ImagePopup from './ImagePopup.js'
import PopupWithForm from './PopupWithForm.js'
import api from '../utils/Api.js'

function App(props) {

 const [selectedCard, setSelectedCard] = React.useState({
     isImagePopupOpen:false,
     imagePopupSource:'',
 })
 const [isOpenedAvatar,setIsOpenedAvatar]= React.useState(false)
 const [isOpenedProfile, setIsOpenedProfile] = React.useState(false)
 const [isOpenedCard ,setIsOpenedCard] = React.useState(false)
 const [user, setUser] = React.useState({
     name:'',
     about:'',
     avatar:'',
    })
const [cards,setCards] = React.useState([])
     
React.useEffect(()=>{
    api.getUserInfo()
    .then((data)=>setUser(data))

    api.getInitialCards()
    .then((data)=>setCards(data))
},[])


    function handleCardClick(card){
        setSelectedCard({
            isImagePopupOpen:true,
            imagePopupSource:card.link,
        })
    }
    function closeAllPopup(){
        setIsOpenedAvatar(false)
        setIsOpenedProfile(false)
        setIsOpenedCard(false)
        setSelectedCard({
            isImagePopupOpen:false,
            imagePopupSource:'',
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
      <div class="root">
             <Header/>

                <ImagePopup closeAllPopup ={closeAllPopup} imagePopup={selectedCard}  />

          


            <section class="pop-up" id='pop-up-delete'>
                <div class="pop-up__overlay"></div>
                <div class="pop-up__container" >
                    <h2 class="pop-up__text pop-up__text_delete">Вы уверены</h2>
                    <form name="form"  class="pop-up__form" id='pop-up__form-delete' novalidate>
                            <button class="pop-up__save pop-up__save_delete">Да</button>
                    </form>
                    <button type="button" class="pop-up__close" ></button>
                </div>
            </section>

            <PopupWithForm closePopup ={closeAllPopup} isOpened={isOpenedProfile} title ='Редактировать профиль' children={
                <>
                    <form name="form"  class="pop-up__form" id='pop-up__form-profile' novalidate>
                            <input type="text" id="name" name="name" class="pop-up__input pop-up__name " placeholder="Имя" required minlength="2" maxlength="40" novalidate autocomplete="off"/>
                            <span class="pop-up__error" id="name-error"></span>
                            <input type="text" id="self" name="about" class="pop-up__input pop-up__self" placeholder="О себе" required minlength="2" maxlength="200" novalidate autocomplete="off"/>
                            <span class="pop-up__error" id='self-error'></span>
                            <button id="save" class="pop-up__save">Сохранить</button>
                    </form>
                </>
            }  />

            

            <PopupWithForm closePopup ={closeAllPopup} isOpened={isOpenedAvatar} title ='Обновить Аватар' children={
                <>
                    <form name="form"  class="pop-up__form" id='pop-up__form-avatar' novalidate>
                        <input type="url" id="avatar" name="avatar" class="pop-up__input pop-up__new-avatar" placeholder="Ссылка на картинку" required  novalidate autocomplete="off"/>
                        <span class="pop-up__error" id='avatar-error'></span>
                        <button class="pop-up__save">Сохранить</button>
                    </form>
                </>
            }  />
            
            

            <PopupWithForm closePopup ={closeAllPopup} isOpened={isOpenedCard} title ='Новое место' children={
                <>
                    <form name="form"  class="pop-up__form" id='pop-up__form-card' novalidate>
                            <input type="text" name="name" id="cardName" class="pop-up__input pop-up__input_card pop-up__name" placeholder="Название" minlength="2" maxlength="30" required novalidate autocomplete="off"/>
                            <span class="pop-up__error pop-up__error_card" id="cardName-error"></span>
                            <input type="url" name="link" id="imageSrc" class="pop-up__input pop-up__input_card pop-up__self" placeholder="Ссылка на картинку" required novalidate autocomplete="off"/>
                            <span class="pop-up__error pop-up__error_card" id="imageSrc-error"></span>
                            <button id='cardSave' class="pop-up__save pop-up__save_card">Сохранить</button>
                    </form>
                </>
            }  />

           

            <Main handleCardClick={handleCardClick} cards={cards}  userName={user.name} userDescription={user.about} userAvatar={user.avatar} openAvatarPopup ={handleEditAvatarClick} openProfilePopup={handleEditProfileClick} openCardPopup= {handleAddPlaceClick}/>

            <Footer/>
        </div>
    </div>
  );
}

export default App;
