import PopupWithForm from "./PopupWithForm"

function PopupWithImage(props){
    function closePopup(){
        props.closePopup()
    }

    return(
        <section className={`pop-up ${props.imagePopup.isImagePopupOpen === true ? 'pop-up_opened':''}`} id='pop-up-image'>
                <div class="pop-up__overlay" onClick={closePopup}></div>
                <div class="pop-up__image-container">
                    <button type="button" onClick={closePopup} class="pop-up__close pop-up__close_image" id='pop-up__close-Image'></button>
                    <img src={props.imagePopup.imagePopupSource} alt=" " class="pop-up__image" />
                    <p class='pop-up__image-text'></p>
                </div>
        </section> 
    )
}
export default PopupWithImage