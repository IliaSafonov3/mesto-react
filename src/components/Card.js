import React from 'react';


function Card (props){
function handleCardClick(){
    props.handleCardClick(props.card)
}

    return(
            <div className="element">
                <button className="element__trashcan" type="button"></button>
                <img className="element__image"  src={props.card.link} alt={props.card.title} onClick={handleCardClick}/>
                <div className="element__rectangle">
                    <h3 className="element__title" >{props.card.name}</h3>
                    <div className="element__like_container">
                        <button className="element__like" type="button"></button>
                        <p className='element__like-quantity'>{props.card.likes.length}</p>
                    </div>    
                </div>
            </div>
    )
}
export default Card