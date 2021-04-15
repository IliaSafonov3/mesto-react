function ImagePopup(props){
    function closeAllPopup(){
        props.closeAllPopup()
    }

    return(
        <section className={`pop-up ${props.imagePopup.isImagePopupOpen === true ? 'pop-up_opened':''}`} id='pop-up-image'>
                <div className="pop-up__overlay" onClick={closeAllPopup}></div>
                <div className="pop-up__image-container">
                    <button type="button" onClick={closeAllPopup} className="pop-up__close pop-up__close_image" id='pop-up__close-Image'></button>
                    <img src={props.imagePopup.imagePopupSource} alt=" " className="pop-up__image" />
                    <p className='pop-up__image-text'>{props.imagePopup.imagePopupName}</p>
                </div>
        </section> 
    )
}
export default ImagePopup