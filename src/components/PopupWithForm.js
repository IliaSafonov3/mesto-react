import React from 'react';


function PopupWithForm(props){

    function closePopup(){
        props.closePopup()
    }

    return(
        <section  className={`pop-up ${props.isOpened === true ? 'pop-up_opened' : ''}`} id='pop-up-profile'>
                <div className="pop-up__overlay" onClick={closePopup}></div>
                <div className="pop-up__container" id='pop-up__container-profile'>
                    <h2 className="pop-up__text">{props.title}</h2>
                    <form name="form"  className="pop-up__form"  noValidate>
                        {props.children}
                    </form>
                    <button onClick={closePopup} type="button" className="pop-up__close" id='pop-up__close-profile'></button>
                </div>
            </section>
    )
}

export default PopupWithForm  