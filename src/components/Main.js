import Card from './Card'
import api from '../utils/Api.js'
import React from 'react';

export default Main

function Main(props){
    function handleCardClick(card){
        props.handleCardClick(card)
    }
 function openAvatarPopup(){
     props.openAvatarPopup()
 }
 function openProfilePopup(){
     props.openProfilePopup()
 }
 function openCardPopup(){
     props.openCardPopup()
 }
 const [user, setUser] = React.useState({
    name:'',
    about:'',
    avatar:'',
   })
   const [cards,setCards] = React.useState([])
     
React.useEffect(()=>{
    api.getUserInfo()
    .then((data)=>setUser(data))
    .catch(console.log('error'))

    api.getInitialCards()
    .then((data)=>setCards(data))
    .catch(console.log('error'))
},[])

    return(
        <main className="main-content">
                <div className="line"></div>

            <section className="profile">
                <div className="profile__overlay" >
                    <button className="profile__button-avatar" onClick={openAvatarPopup} ></button>
                    <img className="profile__avatar"  src={user.avatar}  alt="Аватар профиля"/>
                </div>  
                <div className="profile-info">
                    <div className="profile-info__title"> 
                        <h1 className="profile-info__name">{user.name}</h1>
                        <button className="profile-info__button" onClick ={openProfilePopup} type='button'></button>
                    </div>
                    <h2 className="profile-info__subtitle">{user.about}</h2>
                </div>
                <button type="button" className="profile__button" onClick={openCardPopup}></button>
            </section>

            <section className="elements">
            {cards.map((card) => {
                return (
                    <Card key={card._id} handleCardClick={handleCardClick} card={card}/> 
                )
            })}
            </section>
            </main>
    )
}