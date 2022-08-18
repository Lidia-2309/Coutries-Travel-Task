import { Link } from 'react-router-dom'
import './home.css'

export const Home = () => {
    return (
        <div>
            <h1>Seja Bem-Vindo</h1>
            <h3>Para escolher seu país de destino, basta clicar no botão abaixo.</h3>
            <div className="div-button">
                <button 
                        className="button" 
                        onClick={refreshPage}>
                        <Link className="text" to='/form'>IR PARA FORMULARIO</Link>
                </button>
            </div>
        </div>
    );
};

function refreshPage(){ 
    window.location.reload(); 
}