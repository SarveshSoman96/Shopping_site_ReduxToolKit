import "./CheckOutModal.css";
import ReactDOM from "react-dom";

const ModalInfoWrapper = ({onClose}) => {

    return (
        <div className="backdrop">
            <div className="modal-block">
                <div className="modalInfo">
                    <p>Congratulations!. <br /> Your order placed successfully. </p>
                    <button className="close_modal_btn" onClick={(e) => onClose()}>X</button>
                </div>
            </div>
        </div>
    )
}

const portalLocation = document.getElementById("checkoutmodal")

const CheckOutModal = ({onClose}) => {
  return (
    <>
        {ReactDOM.createPortal(<ModalInfoWrapper onClose={onClose}></ModalInfoWrapper>, portalLocation)}

    </>
  )
}

export default CheckOutModal