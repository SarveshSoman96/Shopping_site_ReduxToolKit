import "./CheckOutModal.css";
import ReactDOM from "react-dom";

const BackDrop = ({children}) => {
    return (
        <div className="backdrop"/>
    )
}

const ModalInfoWrapper = ({children}) => {

    return (
        <div className="modal-block">
            <div className="modalInfo">
                <p>Congratulations!. <br /> Your order placed successfully. </p>
            </div>
        </div>
    )
}

const portalLocation = document.getElementById("checkoutmodal")

const CheckOutModal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<BackDrop/>, portalLocation)}
        {ReactDOM.createPortal(<ModalInfoWrapper>{props.children}</ModalInfoWrapper>, portalLocation)}

    </>
  )
}

export default CheckOutModal