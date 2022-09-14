import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, gql, useQuery, useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom'
import Modal from '../../components/Modal/Modal';

// initialize a GraphQL client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://countries.trevorblades.com'
});

const LIST_CONTINENTS = gql`
  {
        continents{
          name
          code
        }
  }
`;

const FILTRO = gql`
    query PegarUmContinente ($code: ID!){
        continent(code: $code) {
        code
        countries {
            code
            name
            currency
        }
        }
    }
`;


// create a component that renders a select input for coutries
export const PAISESSELECAO = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();
    const { data: dataContinent, loading, error } = useQuery(LIST_CONTINENTS, { client });
    const [continent, setContinent] = useState('');
    const [executeSearch,{data}] = useLazyQuery(FILTRO, {client});
     
    if (loading || error) {
        return <p>{error ? error.message : 'Loading...'}</p>;
    }

    return (
        <div>
            {
                dataContinent.continents.map((item) => {
                    console.log(item);
                })
            }
            <div>
                <select value={continent}
                onChange={(event) => {
                        setContinent(event.target.value)
                    }
                }>
                {dataContinent.continents.map(continent => (
                    <option key={continent.code} value={continent.code}>
                        {continent.name}
                    </option>   
                ))}
                
                </select>
            </div>

            <button 
                    className="btn btn-primary"
                    onClick={() =>
                    executeSearch({
                    variables: { code: continent }
                })
            }>
                OK
            </button>

            <button 
                className="btn btn-primary"
                onClick={() => navigate("/table", {state: {data: data}})
                
                }>
                    NAVIGATE
                    
            </button>

            <button
                className="openModalBtn"
                onClick={() => {
                setModalOpen(true);
                }}
            >
                Open
            </button>

            {modalOpen && <Modal setOpenModal={setModalOpen} />}

            {/* {data && data.continent.countries.map(countries => (
                <option key={countries.name} value={countries.name}>
                    {countries.name}
                    {countries.code} 
                    {countries.currency}            
                </option>   
            
            ))} */}

        </div>


    );
}

 export default PAISESSELECAO;
