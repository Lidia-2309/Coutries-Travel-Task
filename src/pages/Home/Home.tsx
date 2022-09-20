import { Link, useNavigate } from 'react-router-dom'
import './home.css'



export const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Seja Bem-Vindo</h1>
            <h3>Para escolher seu país de destino, basta clicar no botão abaixo.</h3>
            <div className="div-button">
                <button
                    className="button"
                    onClick={() => navigate("/cadastro")}>
                    IR PARA FORMULARIO
                </button>
            </div>
        </div>
    );
};

