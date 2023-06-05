import ReactDOM from "react-dom";

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className="w-full h-24 flex justify-center text-4xl">
            {children}
        </div>,
        document.getElementById("modalbackground")
    )
}

export default Modal;