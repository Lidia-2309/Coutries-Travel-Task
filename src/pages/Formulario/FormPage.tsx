import React, { useState } from 'react'
import './PageForm.css'
import InputMask from 'react-input-mask';
import CountrySelect from '../../components/graphql/Continents';
import { Link } from 'react-router-dom'
import { ApolloClient, InMemoryCache, gql, useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom'


//____________________________________________________________

// initialize a GraphQL client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
});

// write a GraphQL query that asks for names and codes for all countries
const LIST_CONTINENTS = gql`
  {
    countries {
        name
    }
}
 
`;

//________________________________________________//


interface Formulario {
    name: string;
    email: string;
    password: string;
    CPF: string;
}



export const FormPage = () => {

    const { data } = useQuery(LIST_CONTINENTS, { client });
    const [show, setShow] = useState(true);
    const navigate = useNavigate();

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

                    className="btn btn-primary"
                    onClick={() => console.log(formState)}>

                    Enviar

                </button>

                <button

                    className="btn btn-primary"
                    onClick={() => navigate("/teste", {state: formState})}>

                    Seleção de Paises
                    
                </button>

                {/* <div className='nations'>
                    {show && <p>
                        {data.countries.map(countries => (
                            <option key={countries.name} value={countries.name}>
                                {countries.name}
                                {countries.code}
                            </option>
                        ))}
                    </p>
                    }
                    <button
                        type="button"
                        className="button"
                        onClick={() => setShow(!show)}>
                        Paises
                    </button>
                </div> */}


            </form>

        </div>

    );

}

//console.log(formState)