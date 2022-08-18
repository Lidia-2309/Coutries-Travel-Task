import './PageForm.css'
import MaskedInput from '../../components/MaskedInput/masked';
import { Link } from 'react-router-dom'

export const FormPage = () => {
    return (
        <div className="container mt-5">
            <form>
                <div className="titulo_Form">
                    <h1>Formulário</h1>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" 
                    className="form-label">Nome</label>
                    <input type="text" 
                    className="form-control" 
                    id="exampleInputName" 
                    required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" 
                    className="form-label">E-mail</label>
                    <input type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    required/>
                </div>
                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" 
                    className="form-label">Senha</label>
                    <input type="password" 
                    className="form-control" 
                    id="exampleInputPassword1"
                    required/>
                </div>
                <div className="CPF">
                <label htmlFor="CPF" 
                    className="form-label">CPF</label>
                    <MaskedInput/>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
        
    );

}

export default FormPage