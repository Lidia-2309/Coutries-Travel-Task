import React from "react";
import "./Modal.css";

export function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">

        </div>
        <div className="body">

        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancelar
          </button>
          <button className="btn btn-primary">
            
            Confirmar
            
            </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
