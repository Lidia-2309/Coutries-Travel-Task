import React, { useState } from 'react'
import './PageForm.css'
import CountrySelect from '../../components/graphql';
import InputMask from 'react-input-mask';

interface Formulario {
    name: string;
    email: string;
    password: string;
    CPF: string;
}

export const FormPage = () => {

    //USESTATE

    const [formState, setFormState] = useState<Formulario>({
        name: "",
        email: "",
        password: "",
        CPF: ""
    });

    const onSend = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container mt-5">
            <form onSubmit={onSend}>
                <div className="titulo_Form">
                    <h1>Formulário</h1>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputName" 
                    className="form-label">Nome</label>
                    <input type="text" 
                    className="form-control" 
                    id="name" 
                    required
                    value={formState.name}
                    onChange={(event) =>
                        setFormState({
                            ...formState,
                            name: event.currentTarget?.value || "teste",
                        })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" 
                    className="form-label">E-mail</label>
                    <input type="email" 
                    className="form-control" 
                    id="email" 
                    aria-describedby="emailHelp"
                    required
                    value={formState.email}
                    onChange={(event) =>
                        setFormState({
                            ...formState,
                            email: event.currentTarget?.value || "",
                        })}
                    />
                </div>
                
                <div className="mb-3">
                <label htmlFor="exampleInputPassword1" 
                    className="form-label">Senha</label>
                    <input type="password" 
                    className="form-control" 
                    id="password"
                    required
                    value={formState.password}
                    onChange={(event) =>
                        setFormState({
                            ...formState,
                            password: event.currentTarget?.value || "",
                        })}
                    />
                    
                </div>
                
                <div className="CPF">
                <label htmlFor="CPF" 
                    className="form-label">CPF</label>
                    <InputMask
                        className='form-control' 
                        mask="999.999.999-99"
                        id="CPF"
                        required
                        value={formState.CPF}
                        onChange={(event) =>
                        setFormState({
                            ...formState,
                            CPF: event.currentTarget?.value || "",
                        })}
                    />     
                </div>


                <div className="select">
                    <CountrySelect/>
                </div>
                
                <button
                    //type="submit"
                    className="btn btn-primary"
                    onClick={()=>console.log(formState)}>
                    
                    Enviar
                
                </button>
                 
            </form>
            
        </div>
        
    );
   
}