import React, { useEffect, useState } from 'react'
import './PageForm.css'
import InputMask from 'react-input-mask';
import { useQuery, useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom'
import {client, LIST_CONTINENTS, FILTRO} from '../../components/graphql' 
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

const validationPost = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    CPF: yup.string().required(),
})
interface Formulario {
    name: string;
    email: string;
    password: string;
    CPF: string;
}

export const FormPage = () => {
    //yupResolver(validationPost)
    const { data: dataContinent, loading, error,refetch } = useQuery(LIST_CONTINENTS, { client });
    const [continent, setContinent] = useState('AF'); 
    const [executeSearch,{data}] = useLazyQuery(FILTRO, {client});
    const navigate = useNavigate();

    //USESTATE
    const [formState, setFormState] = useState<Formulario>({
        name: "",
        email: "",
        password: "",
        CPF: ""
    });

    const onSend = (e) => {
        const dataD ={
            formState,
        }
        console.log(dataD);
        e.preventDefault();
    }

    useEffect(()=>{ 
        executeSearch({variables: { code: continent }}) 
        refetch(); 
    },[])

    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }
  

    return (
        <div className="container mt-5">
            <form onSubmit={onSend} >
            
                <div className="titulo_Form">
                    <h1>Formulário</h1>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputName"
                        className="form-label">Nome</label>
                    <input type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        // //required
                        value={formState.name}
                        onChange={(event) =>
                            setFormState({
                                ...formState,
                                name: event.currentTarget?.value || "",
                            })}
                    />
                    <p className="error-message">{error}</p>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1"
                        className="form-label">E-mail</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        //required
                        value={formState.email}
                        onChange={(event) =>
                            setFormState({
                                ...formState,
                                email: event.currentTarget?.value || "",
                            })}
                    />
                     <p className="error-message">{error}</p>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1"
                        className="form-label">Senha</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        //required
                        value={formState.password}
                        onChange={(event) =>
                            setFormState({
                                ...formState,
                                password: event.currentTarget?.value || "",
                            })}
                    />
                     <p className="error-message">{error}</p>
                </div>

                <div className="CPF">
                    <label htmlFor="CPF"
                        className="form-label">CPF</label>
                    <InputMask
                        className='form-control'
                        mask="999.999.999-99"
                        id="CPF"
                        //required
                        value={formState.CPF}
                        onChange={(event) =>
                            setFormState({
                                ...formState,
                                CPF: event.currentTarget?.value || "",
                            })}
                    />
                </div>
                <p className="error-message">{error}</p>
            <div>
                
                <select value={continent}
                onChange={(event) => {
                        setContinent(event.target.value)
                    }
                
                }

                onClick={() =>
                    executeSearch({
                    variables: { code: continent }
                })}>
                    
                {dataContinent.continents.map(continent => (
                    <option key={continent.code} value={continent.code} >
                        {continent.name}           
                    </option>   
                ))}
                </select>
                <p className="error-message">{error}</p>
            </div>

            <button 
                className="btn btn-primary"
                onClick={() => {
                    navigate("/destinos", {state: {data: data, name:formState.name, cpf:formState.CPF} })
                    }             
                }>
                    Escolher País
                    
            </button>
                    
            
            </form>

        </div>

    );

}


