import React, { useState } from 'react'
import './PageForm.css'
import MaskedInput from '../../components/MaskedInput/masked';
import { Link } from 'react-router-dom'

interface Formulario {
    name: string;
    email: string;
    password: string;
}

export const FormPage = () => {
    
    const [formState, setFormState] = useState<Formulario>({
        name: "",
        email: "",
        password: "",
    });

    console.log({ formState});

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
                    id="name" 
                    required
                    value={formState.name}
                    onChange={(event) =>
                        setFormState({
                            ...formState,
                            name: event.currentTarget?.value || "",
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
                    <MaskedInput/>
                </div>
                
                <button type="submit" className="btn btn-primary">Enviar</button>
                 
            </form>
            
        </div>
        
    );
   
}

