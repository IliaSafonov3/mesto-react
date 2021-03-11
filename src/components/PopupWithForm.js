import React from 'react';


function PopupWithForm(props){

    function closePopup(){
        props.closePopup()
    }

    return(
        <section  className={`pop-up ${props.isOpened === true ? 'pop-up_opened' : ''}`} id='pop-up-profile'>
                <div class="pop-up__overlay" onClick={closePopup}></div>
                <div class="pop-up__container" id='pop-up__container-profile'>
                    <h2 class="pop-up__text">{props.title}</h2>
                        {props.children}
                    <button onClick={closePopup} type="button" class="pop-up__close" id='pop-up__close-profile'></button>
                </div>
            </section>
    )
}

export default PopupWithForm  