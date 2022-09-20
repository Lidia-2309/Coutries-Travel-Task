import React from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";


export function Modal({ setOpenModal, nome, CPF }) {
    const navigate = useNavigate();
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
            <h1>Você confirma o vôo?</h1>
            
        </div>
        <div className="body">
        <h4>Nome: {nome}</h4>
            <h4>CPF: {CPF}</h4>
            <h4>País de Destino: </h4>
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
          <button className="btn btn-primary"
            onClick={()=> {
                navigate("/fim")
            }}
          >
            Confirmar
            
            </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
