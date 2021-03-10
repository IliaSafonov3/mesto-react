import Card from './Card'
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

    return(
        <main className="main-content">
                <div className="line"></div>

            <section className="profile">
                <div className="profile__overlay" >
                    <button className="profile__button-avatar" onClick={openAvatarPopup} ></button>
                    <img className="profile__avatar"  src={props.userAvatar}  alt="Аватар профиля"/>
                </div>  
                <div className="profile-info">
                    <div className="profile-info__title"> 
                        <h1 className="profile-info__name">{props.userName}</h1>
                        <button className="profile-info__button" onClick ={openProfilePopup} type='button'></button>
                    </div>
                    <h2 className="profile-info__subtitle">{props.userDescription}</h2>
                </div>
                <button type="button" className="profile__button" onClick={openCardPopup}></button>
            </section>

            <section className="elements">
            {props.cards.map((card) => {
                return (
                    <Card handleCardClick={handleCardClick} card={card}/>
                )
            })}
            </section>
            </main>
    )
}